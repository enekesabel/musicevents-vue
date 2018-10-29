import {expect} from 'chai';
import {IArtist} from '@s0me1/musicevents-core';
import {generateArtists} from './mocks/artist';
import {IArtistState} from '../../src/store/modules/artist/IArtistState';
import {getters} from '../../src/store/modules/artist/getters';

describe('ArtistGetters', () => {

  let artists: IArtist[];
  let state: IArtistState;

  beforeEach(() => {
    artists = generateArtists(10);
    state = {
      artists,
    };
  });

  describe('favouriteArtists', () => {

    it('Should return the favourite artists', () => {
      const favouriteIndices = [3, 7];
      const favouriteArtists: IArtist[] = [];

      favouriteIndices.forEach((i) => {
        state.artists[i] = {...state.artists[i], favourite: true};
        favouriteArtists.push(state.artists[i]);
      });

      const favourites = getters.favouriteArtists(state);

      expect(favourites).to.have.members(favouriteArtists);
    });
  });

});
