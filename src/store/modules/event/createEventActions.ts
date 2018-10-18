import {ActionTree} from 'vuex';
import {IEventState} from '@/store/modules/event/IEventState';
import {IRootState} from '@/store/IRootState';
import {Event, IEvent, IEventApi} from '@s0me1/musicevents-core';
import {EventMutation} from '@/store/modules/event/mutations';

export const createEventActions: (eventApi: IEventApi) => ActionTree<IEventState, IRootState> = (eventApi: IEventApi) => ({
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
