import {IEventApi} from '@s0me1/musicevents-core';
import {IRootState} from '@/store/IRootState';
import {Module} from 'vuex';
import {IEventState} from '@/store/modules/event/IEventState';
import {createEventActions} from '@/store/modules/event/createEventActions';
import {getters} from '@/store/modules/event/getters';

export const state: IEventState = {
  events: [],
};

const namespaced: boolean = true;

export const createEventModule: (eventApi: IEventApi) => Module<IEventState, IRootState> = (eventApi: IEventApi) => ({
  state,
  namespaced,
  getters,
  actions: createEventActions(eventApi),
});
