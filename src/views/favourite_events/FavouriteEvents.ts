import {Component, Vue} from 'vue-property-decorator';
import {IEvent} from '@s0me1/musicevents-core';
import {generateEvents} from '../../../tests/unit/mocks/event';
import EventList from '@/components/event_list/EventList';

@Component({
  components: {EventList},
})
export default class FavouriteEvents extends Vue {
  events: IEvent[] = generateEvents(10);
}
