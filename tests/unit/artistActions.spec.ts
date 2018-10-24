import chai, {expect} from 'chai';
import sinon, {SinonSpy} from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import {createArtistActions} from '../../src/store/modules/artist/createArtistActions';
import {createMockArtistApi} from './mocks/artist';
import {IArtistActions} from '../../src/store/modules/artist/IArtistActions';
import {IArtistState} from '../../src/store/modules/artist/IArtistState';
import {ArtistMutation} from '../../src/store/modules/artist/mutations';
import {IArtistApi} from '@s0me1/musicevents-core';

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
    commit = sinon.spy();
  });

  afterEach(() => {
    commit.resetHistory();
  });

  it('Should be able to fetch artist', async () => {
    await actions.fetchArtists({commit, state});
    const artists = await artistApi.getAll();
    expect(commit.args).to.deep.equal([[
      ArtistMutation.ARTISTS_LOADED,
      [...artists],
    ]]);
  });

});
