import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {EventMixin} from '@/mixins/EventMixin';

@Component
export default class EventFavouriteButton extends mixins(EventMixin) {

  get icon(): string {
    return this.isFavourite ? 'star' : 'star_border';
  }

  get isFavourite(): boolean {
    return this.event.favourite;
  }

  get tooltip(): string {
    return this.isFavourite ? 'Remove from favourites' : 'Add to favourites';
  }

  onClick() {
    console.log('favourite click');
  }

}
