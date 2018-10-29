import {IArtistState} from '@/store/modules/artist/IArtistState';
import {MutationTree} from 'vuex';
import {IArtist} from '@s0me1/musicevents-core';

export enum ArtistMutation {
  ARTISTS_LOADED = 'ARTISTS_LOADED',
  SET_ARTIST = 'SET_ARTIST',
}

export const mutations: MutationTree<IArtistState> = {
  [ArtistMutation.ARTISTS_LOADED](state, payload: IArtist[]) {
    state.artists = payload;
  },
  [ArtistMutation.SET_ARTIST](state, payload: IArtist) {
    const index = state.artists.findIndex(a => a.id === payload.id);
    if (index !== -1) {
      state.artists.splice(index, 1, payload);
    } else {
      state.artists.push(payload);
    }
  },
};
