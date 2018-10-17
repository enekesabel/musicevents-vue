import {ActionTree} from 'vuex';
import {IArtistState} from '@/store/modules/artist/IArtistState';
import {IRootState} from '@/store/IRootState';
import {IArtist, IArtistApi} from '@s0me1/musicevents-core';
import {ArtistMutation} from '@/store/modules/artist/mutations';

export const createArtistActions: (artistApi: IArtistApi) => ActionTree<IArtistState, IRootState> = (artistApi: IArtistApi) => ({
  async fetchArtists({commit}): Promise<void> {
    try {
      const artists: IArtist[] = await artistApi.getAll();
      commit(ArtistMutation.ARTISTS_LOADED, artists);
    } catch (e) {
      commit(ArtistMutation.ARTISTS_LOADED, []);
    }
  },
});
