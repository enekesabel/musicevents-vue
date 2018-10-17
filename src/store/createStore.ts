import Vuex, {Store} from 'vuex';
import {IRootState} from '@/store/IRootState';
import {IArtistApi, IEventApi} from '@s0me1/musicevents-core';
import {createArtistModule} from '@/store/modules/artist/createArtistModule';

export const createStore: (artistApi: IArtistApi, eventApi: IEventApi) => Store<IRootState> = (artistApi: IArtistApi, eventApi: IEventApi) => (new Vuex.Store({
  state: {
    version: '1.0.0',
  },
  modules: {
    artist: createArtistModule(artistApi),
  },
}));
