import {Component} from 'vue-property-decorator';
import {Routes} from '@/router/routes';
import {mixins} from 'vue-class-component';
import {ArtistMixin} from '@/mixins/ArtistMixin';

@Component
export default class ArtistListCard extends mixins(ArtistMixin) {

  onItemClick() {
    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: this.artist.id}});
  }

}
