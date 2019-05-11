import Component from 'vue-class-component';
import {Routes} from '@/router/routes';
import Vue from 'vue';
import {Inject} from 'vue-property-decorator';
import {Services} from '@/Services';
import {IArtist, IArtistApi} from '@s0me1/musicevents-core';

@Component
export default class ArtistSearch extends Vue {

  @Inject(Services.ARTIST_API)
  private artistApi!: IArtistApi;

  private drawerVisible: boolean = false;

  Routes = Routes;

  private selectedArtistName = '';
  private artists: IArtist[] = [];
  private renderAutocomplete: boolean = true;

  get artistNames(): string[] {
    return this.artists.map(a => a.name);
  }

  get selectedArtist(): IArtist | null {
    return this.artists.find(a => a.name === this.selectedArtistName) || null;
  }

  async searchArtists(query: string) {
    if (!query) {
      this.artists = [];
      return;
    }
    this.artists = await this.artistApi.search(query);
  }

  async onSearchEntrySelected() {
    if (!this.selectedArtist) {
      return;
    }
    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: this.selectedArtist.id}});

    // trick: autocomplet needs to be rerendered to capture clicks again
    setTimeout(() => {
      this.renderAutocomplete = false;
      this.$nextTick(() => {
        this.renderAutocomplete = true;
      });
    }, 100);
  }

}
