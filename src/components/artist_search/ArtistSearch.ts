import Component from 'vue-class-component';
import {Routes} from '@/router/routes';
import Vue from 'vue';
import {Inject} from 'vue-property-decorator';
import {Services} from '@/Services';
import {ArtistSearchOptions, IArtistApi} from '@s0me1/musicevents-core';

@Component
export default class ArtistSearch extends Vue {

  @Inject(Services.ARTIST_API)
  private artistApi!: IArtistApi;

  private drawerVisible: boolean = false;

  Routes = Routes;

  private selectedArtistName = '';
  private artists: ArtistSearchOptions[] = [];
  private renderAutocomplete: boolean = true;

  get artistNames(): string[] {
    return this.artists.map(a => a.name);
  }

  async searchArtists(query: string) {
    if (!query) {
      this.artists = [];
      return;
    }
    this.artists = await this.artistApi.search(query);
  }

  async onSearchEntrySelected(e: any) {
    const selectedArtist = (await this.artistApi.find(e))[0];
    if (!selectedArtist) {
      return;
    }

    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: selectedArtist.id}});

    // trick: autocomplet needs to be rerendered to capture clicks again
    this.$nextTick(() => {
      this.renderAutocomplete = false;
      this.$nextTick(() => {
        this.renderAutocomplete = true;
      });
    });
  }

}
