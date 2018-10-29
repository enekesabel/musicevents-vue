import {IEvent} from '@s0me1/musicevents-core';
import {IEventGetters} from './IEventGetters';

export const getters: IEventGetters = {
  favouriteEvents(state): IEvent[] {
    return state.events.filter(a => a.favourite);
  },
};
