import {Event, IEvent, IEventApi} from '@s0me1/musicevents-core';
import {EventMutation} from './mutations';
import {IEventActions} from './IEventActions';

export const createEventActions: (eventApi: IEventApi) => IEventActions = (eventApi: IEventApi) => ({
  async fetchEvents({commit}): Promise<void> {
    try {
      const events: IEvent[] = await eventApi.getAll();
      commit(EventMutation.EVENTS_LOADED, events);
    } catch (e) {
      console.log(e);
      commit(EventMutation.EVENTS_LOADED, []);
    }
  },
  async markFavourite({commit}, event: IEvent): Promise<void> {
    try {
      await eventApi.markFavourite(event.id);
      commit(EventMutation.SET_EVENT, new Event({
        ...event.serialize(),
        favourite: true,
      }));
    } catch (e) {
      console.log(e);
    }
  },
  async unmarkFavourite({commit}, event: IEvent): Promise<void> {
    try {
      await eventApi.markFavourite(event.id);
      commit(EventMutation.SET_EVENT, new Event({
        ...event.serialize(),
        favourite: false,
      }));
    } catch (e) {
      console.log(e);
    }
  },
});
