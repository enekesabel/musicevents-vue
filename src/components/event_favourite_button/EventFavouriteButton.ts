import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {EventMixin} from '@/mixins/EventMixin';

@Component
export default class EventFavouriteButton extends mixins(EventMixin) {

  get icon(): string {
    return this.event.favourite ? 'star' : 'star_border';
  }

  onClick() {
    console.log('favourite click');
  }

}
