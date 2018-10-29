import {IRootState} from '@/store/IRootState';
import {GetterTree} from 'vuex';
import {IEventState} from './IEventState';
import {IEvent} from '@s0me1/musicevents-core';

export interface IEventGetters extends GetterTree<IEventState, IRootState> {
  favouriteEvents(state: IEventState): IEvent[];
}
