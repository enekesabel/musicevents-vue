import {Component, Prop, Vue} from 'vue-property-decorator';
import {IEvent} from '@s0me1/musicevents-core';

@Component
export class EventMixin extends Vue {

  @Prop({
    required: true,
  })
  protected event!: IEvent;

}
