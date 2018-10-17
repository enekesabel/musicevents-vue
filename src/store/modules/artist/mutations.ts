import {IArtistState} from '@/store/modules/artist/IArtistState';
import {MutationTree} from 'vuex';
import {IArtist} from '@s0me1/musicevents-core';

export enum ArtistMutation {
  ARTISTS_LOADED = 'ARTISTS_LOADED',
}

export const mutations: MutationTree<IArtistState> = {
  [ArtistMutation.ARTISTS_LOADED](state, payload: IArtist[]) {
    state.artists = payload;
  },
};
