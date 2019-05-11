import {Component} from 'vue-property-decorator';
import EventList from '@/components/event_list/EventList';
import {mixins} from 'vue-class-component';
import {EventModuleMixin} from '@/mixins/EventModuleMixin';

@Component({
  components: {EventList},
})
export default class FavouriteEvents extends mixins(EventModuleMixin) {

  created() {
    this.fetchEvents();
  }
}
