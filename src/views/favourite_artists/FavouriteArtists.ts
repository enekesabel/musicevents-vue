import {Component} from 'vue-property-decorator';
import ArtistList from '@/components/artist_list/ArtistList';
import {mixins} from 'vue-class-component';
import {ArtistModuleMixin} from '@/mixins/ArtistModuleMixin';

@Component({
  components: {ArtistList},
})
export default class FavouriteArtists extends mixins(ArtistModuleMixin) {

  mounted() {
    this.fetchArtists();
  }
}
