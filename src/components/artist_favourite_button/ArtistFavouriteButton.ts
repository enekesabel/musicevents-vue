import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {ArtistMixin} from '@/mixins/ArtistMixin';

@Component
export default class ArtistFavouriteButton extends mixins(ArtistMixin) {

  get icon(): string {
    return this.artist.favourite ? 'favorite' : 'favorite_border';
  }

  onClick() {
    console.log('favourite click');
  }

}
