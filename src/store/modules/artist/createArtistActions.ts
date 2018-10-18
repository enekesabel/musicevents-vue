import {ActionTree} from 'vuex';
import {IArtistState} from '@/store/modules/artist/IArtistState';
import {IRootState} from '@/store/IRootState';
import {Artist, IArtist, IArtistApi} from '@s0me1/musicevents-core';
import {ArtistMutation} from '@/store/modules/artist/mutations';

export const createArtistActions: (artistApi: IArtistApi) => ActionTree<IArtistState, IRootState> = (artistApi: IArtistApi) => ({
  async fetchArtists({commit}): Promise<void> {
    try {
      const artists: IArtist[] = await artistApi.getAll();
      commit(ArtistMutation.ARTISTS_LOADED, artists);
    } catch (e) {
      console.log(e);
      commit(ArtistMutation.ARTISTS_LOADED, []);
    }
  },
  async markFavourite({commit}, artist: IArtist): Promise<void> {
    try {
      await artistApi.markFavourite(artist.id);
      commit(ArtistMutation.SET_ARTIST, new Artist({
        ...artist.serialize(),
        favourite: true,
      }));
    } catch (e) {
      console.log(e);
    }
  },
  async unmarkFavourite({commit}, artist: IArtist): Promise<void> {
    try {
      await artistApi.markFavourite(artist.id);
      commit(ArtistMutation.SET_ARTIST, new Artist({
        ...artist.serialize(),
        favourite: false,
      }));
    } catch (e) {
      console.log(e);
    }
  },
});
