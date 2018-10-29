import {Artist, IArtist, IArtistApi} from '@s0me1/musicevents-core';
import {ArtistMutation} from './mutations';
import {IArtistActions} from './IArtistActions';

export const createArtistActions: (artistApi: IArtistApi) => IArtistActions = (artistApi: IArtistApi) => ({
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

      const newArtist = new Artist({
        ...artist.serialize(),
        favourite: true,
      });

      commit(ArtistMutation.SET_ARTIST, newArtist);
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
