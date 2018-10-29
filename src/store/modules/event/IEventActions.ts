import {IRootState} from '@/store/IRootState';
import {ActionTree} from 'vuex';
import {IEvent} from '@s0me1/musicevents-core';
import {IEventState} from '@/store/modules/event/IEventState';

export interface IEventActions extends ActionTree<IEventState, IRootState> {
  fetchEvents({commit}: any): Promise<void>;

  markFavourite({commit}: any, artist: IEvent): Promise<void>;

  unmarkFavourite({commit}: any, artist: IEvent): Promise<void>;
}
