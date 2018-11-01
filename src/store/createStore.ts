import Vuex, {Store} from 'vuex';
import {IRootState} from './IRootState';
import {IArtistApi, IEventApi} from '@s0me1/musicevents-core';
import {createArtistModule} from './modules/artist/createArtistModule';
import {createEventModule} from './modules/event/createEventModule';
import general from './modules/general';

export const createStore: (artistApi: IArtistApi, eventApi: IEventApi) => Store<IRootState> = (artistApi: IArtistApi, eventApi: IEventApi) => (new Vuex.Store({
  state: {
    version: '1.0.0',
  },
  modules: {
    general,
    artist: createArtistModule(artistApi),
    event: createEventModule(eventApi),
  },
}));
