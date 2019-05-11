import Component from 'vue-class-component';
import {Action, Getter, State} from 'vuex-class';
import Vue from 'vue';
import {IEvent} from '@s0me1/musicevents-core';

const namespace: string = 'event';

@Component
export class EventModuleMixin extends Vue {

  @State('events', {namespace}) events!: IEvent[];

  @Getter('favouriteEvents', {namespace}) favouriteEvents!: IEvent[];

  @Action('fetchEvents', {namespace}) fetchEvents!: () => Promise<void>;
  @Action('markFavourite', {namespace}) markFavourite!: (event: IEvent) => Promise<void>;
  @Action('unmarkFavourite', {namespace}) unmarkFavourite!: (event: IEvent) => Promise<void>;

}
