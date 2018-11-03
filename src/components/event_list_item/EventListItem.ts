import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {EventMixin} from '@/mixins/EventMixin';
import EventFavouriteButton from '@/components/event_favourite_button/EventFavouriteButton';

@Component({
  components: {EventFavouriteButton},
})
export default class EventListItem extends mixins(EventMixin) {

}
