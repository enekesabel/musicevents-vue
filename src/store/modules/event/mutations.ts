import {IEventState} from '@/store/modules/event/IEventState';
import {MutationTree} from 'vuex';
import {IEvent} from '@s0me1/musicevents-core';

export enum EventMutation {
  EVENTS_LOADED = 'EVENTS_LOADED',
  SET_EVENT = 'SET_EVENT',
}

export const mutations: MutationTree<IEventState> = {
  [EventMutation.EVENTS_LOADED](state, payload: IEvent[]) {
    state.events = payload;
  },
  [EventMutation.SET_EVENT](state, payload: IEvent) {
    const index = state.events.findIndex(a => a.id === payload.id);
    if (index !== -1) {
      state.events.splice(index, 1, payload);
    } else {
      state.events.push(payload);
    }
  },
};
