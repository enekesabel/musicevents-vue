import {Component, Prop} from 'vue-property-decorator';
import {IEvent} from '@s0me1/musicevents-core';
import Vue from 'vue';
import EventListItem from '@/components/event_list_item/EventListItem';

@Component({
  components: {EventListItem},
})
export default class EventList extends Vue {
  @Prop({
    default: () => ([]),
    required: true,
    type: Array,
  })
  private events!: IEvent[];
}
