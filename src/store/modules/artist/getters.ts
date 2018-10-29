import {IArtist} from '@s0me1/musicevents-core';
import {IArtistGetters} from '@/store/modules/artist/IArtistGetters';

export const getters: IArtistGetters = {
  favouriteArtists(state): IArtist[] {
    return state.artists.filter(a => a.favourite);
  },
};
