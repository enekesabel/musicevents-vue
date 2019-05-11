import {IArtistApi} from '@s0me1/musicevents-core';
import {IRootState} from '@/store/IRootState';
import {Module} from 'vuex';
import {IArtistState} from '@/store/modules/artist/IArtistState';
import {createArtistActions} from '@/store/modules/artist/createArtistActions';
import {getters} from '@/store/modules/artist/getters';
import {mutations} from '@/store/modules/artist/mutations';

export const state: IArtistState = {
  artists: [],
};

const namespaced: boolean = true;

export const createArtistModule: (artistApi: IArtistApi) => Module<IArtistState, IRootState> = (artistApi: IArtistApi) => ({
  state,
  namespaced,
  getters,
  mutations,
  actions: createArtistActions(artistApi),
});
