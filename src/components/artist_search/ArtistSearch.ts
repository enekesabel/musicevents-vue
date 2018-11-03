import Component from 'vue-class-component';
import {Routes} from '@/router/routes';
import {generateArtists} from '../../../tests/unit/mocks/artist';
import Vue from 'vue';

@Component
export default class ArtistSearch extends Vue {
  private drawerVisible: boolean = false;

  Routes = Routes;

  private selectedArtistName = null;
  private artists = generateArtists(10);

  get artistNames(): string[] {
    return this.artists.map(a => a.name);
  }

  onSearchEntrySelected(e: any) {
    const selectedArtist = this.artists.find(a => a.name === e);
    if (!selectedArtist) {
      return;
    }

    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: selectedArtist.id}});
  }

}
