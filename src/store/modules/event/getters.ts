import {GetterTree} from 'vuex';
import {IEventState} from '@/store/modules/event/IEventState';
import {IRootState} from '@/store/IRootState';
import {IEvent} from '@s0me1/musicevents-core';

export const getters: GetterTree<IEventState, IRootState> = {
  favouriteEvents(state): IEvent[] {
    return state.events.filter(a => a.favourite);
  },
};
