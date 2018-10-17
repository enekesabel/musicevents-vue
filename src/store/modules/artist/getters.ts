import {GetterTree} from 'vuex';
import {IArtistState} from '@/store/modules/artist/IArtistState';
import {IRootState} from '@/store/IRootState';
import {IArtist} from '@s0me1/musicevents-core';

export const getters: GetterTree<IArtistState, IRootState> = {
  favouriteArtists(state): IArtist[] {
    return state.artists.filter(a => a.favourite);
  },
};
