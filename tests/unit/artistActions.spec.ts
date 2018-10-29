import chai, {expect} from 'chai';
import sinon, {SinonSpy, SinonStub} from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import {createArtistActions} from '../../src/store/modules/artist/createArtistActions';
import {createMockArtistApi, generateArtists} from './mocks/artist';
import {IArtistActions} from '../../src/store/modules/artist/IArtistActions';
import {IArtistState} from '../../src/store/modules/artist/IArtistState';
import {ArtistMutation} from '../../src/store/modules/artist/mutations';
import {IArtist, IArtistApi} from '@s0me1/musicevents-core';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('ArtistActions', () => {

  let actions: IArtistActions;
  let commit: SinonSpy;
  let artistApi: IArtistApi;
  const state: IArtistState = {
    artists: [],
  };

  beforeEach(() => {
    artistApi = createMockArtistApi();
    actions = createArtistActions(artistApi);
    state.artists = [];
    commit = sinon.spy();
  });

  afterEach(() => {
    commit.resetHistory();
  });

  describe('Committing mutations', () => {
    it('Should be able to fetch artists', async () => {
      await actions.fetchArtists({commit, state});
      const artists = await artistApi.getAll();
      expect(commit.args).to.deep.equal([[
        ArtistMutation.ARTISTS_LOADED,
        [...artists],
      ]]);
    });

    it('Should be able to mark an artist favourite', async () => {
      const state: IArtistState = {
        artists: generateArtists(10),
      };

      const artistToMarkFavourite = state.artists[0];

      await actions.markFavourite({commit}, artistToMarkFavourite);

      expect(commit.args[0][0]).to.be.equal(ArtistMutation.SET_ARTIST);

      const commitedArtist: IArtist = commit.args[0][1];
      expect(commitedArtist.id).to.be.equal(artistToMarkFavourite.id);
      expect(commitedArtist.favourite).to.be.true;
    });

    it('Should be able to mark an artist favourite', async () => {
      const state: IArtistState = {
        artists: generateArtists(10),
      };

      state.artists[0] = {...state.artists[0], favourite: true};
      const artistToUnmarkFavourite = state.artists[0];

      await actions.unmarkFavourite({commit}, artistToUnmarkFavourite);

      expect(commit.args[0][0]).to.be.equal(ArtistMutation.SET_ARTIST);

      const commitedArtist: IArtist = commit.args[0][1];
      expect(commitedArtist.id).to.be.equal(artistToUnmarkFavourite.id);
      expect(commitedArtist.favourite).to.be.false;
    });
  });

  describe('Handling errors', () => {
    let fetchStub: SinonStub;
    let markStub: SinonStub;
    let unmarkStub: SinonStub;

    beforeEach(() => {
      fetchStub = sinon.stub(artistApi, 'getAll').throws();
      markStub = sinon.stub(artistApi, 'markFavourite').throws();
      unmarkStub = sinon.stub(artistApi, 'unmarkFavourite').throws();
    });

    afterEach(() => {
      fetchStub.restore();
      markStub.restore();
      unmarkStub.restore();
    });

    it('Should throw an error and reset artists if an error occurred when fetching artists', async () => {
      await expect(actions.fetchArtists({commit})).to.throw;
      expect(commit.args).to.deep.equal([[
        ArtistMutation.ARTISTS_LOADED,
        [],
      ]]);
    });

    it('Should throw an error if an error occurred when marking an artist favourite', async () => {
      await expect(actions.markFavourite({commit}, state.artists[0])).to.throw;
      expect(commit).to.not.have.been.called;
    });
    it('Should throw an error if an error occurred when unmarking a favourite artist', async () => {
      await expect(actions.unmarkFavourite({commit}, state.artists[0])).to.throw;
      expect(commit).to.not.have.been.called;
    });
  });

});
