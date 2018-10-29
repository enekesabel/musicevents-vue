import {expect} from 'chai';
import {ArtistMutation, mutations} from '../../src/store/modules/artist/mutations';
import {IArtist} from '@s0me1/musicevents-core';
import {generateArtists} from './mocks/artist';
import {IArtistState} from '@/store/modules/artist/IArtistState';

describe('ArtistMutations', () => {

  let artists: IArtist[];

  beforeEach(() => {
    artists = generateArtists(10);
  });

  describe(`${ArtistMutation.SET_ARTIST}`, () => {

    it('Should add a new artist if there are no artists yet', () => {
      const mutation = mutations[ArtistMutation.SET_ARTIST];
      const state: IArtistState = {
        artists: [],
      };
      const artist: IArtist = artists[0];

      mutation(state, artist);

      expect(state.artists).to.be.lengthOf(1);
      expect(state.artists).to.include(artist);
    });

    it('Should override the artist, if it is already included', () => {
      const mutation = mutations[ArtistMutation.SET_ARTIST];
      const state: IArtistState = {
        artists: [...artists],
      };
      const oldArtist = state.artists[0];

      const artist: IArtist = {
        ...oldArtist,
        name: 'New name',
      };

      mutation(state, artist);

      expect(state.artists).to.be.lengthOf(artists.length);
      expect(state.artists).to.include(artist);
      expect(state.artists).not.to.include(oldArtist);
    });

  });

  describe(`${ArtistMutation.ARTISTS_LOADED}`, () => {

    it('Should override the old artists array', () => {
      const mutation = mutations[ArtistMutation.ARTISTS_LOADED];
      const state: IArtistState = {
        artists: [...artists],
      };
      const newArtists: IArtist[] = [];

      mutation(state, newArtists);

      expect(state.artists).to.be.equal(newArtists);

    });

  });

});
