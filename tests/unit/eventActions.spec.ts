import chai, {expect} from 'chai';
import sinon, {SinonSpy, SinonStub} from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import {createEventActions} from '../../src/store/modules/event/createEventActions';
import {createMockEventApi, generateEvents} from './mocks/event';
import {IEventActions} from '../../src/store/modules/event/IEventActions';
import {IEventState} from '../../src/store/modules/event/IEventState';
import {EventMutation} from '../../src/store/modules/event/mutations';
import {IEvent, IEventApi} from '@s0me1/musicevents-core';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('EventActions', () => {

  let actions: IEventActions;
  let commit: SinonSpy;
  let eventApi: IEventApi;
  const state: IEventState = {
    events: [],
  };

  beforeEach(() => {
    eventApi = createMockEventApi();
    actions = createEventActions(eventApi);
    state.events = [];
    commit = sinon.spy();
  });

  afterEach(() => {
    commit.resetHistory();
  });

  describe('Committing mutations', () => {
    it('Should be able to fetch events', async () => {
      await actions.fetchEvents({commit, state});
      const events = await eventApi.getAll();
      expect(commit.args).to.deep.equal([[
        EventMutation.EVENTS_LOADED,
        [...events],
      ]]);
    });

    it('Should be able to mark an event favourite', async () => {
      const state: IEventState = {
        events: generateEvents(10),
      };

      const eventToMarkFavourite = state.events[0];

      await actions.markFavourite({commit}, eventToMarkFavourite);

      expect(commit.args[0][0]).to.be.equal(EventMutation.SET_EVENT);

      const commitedEvent: IEvent = commit.args[0][1];
      expect(commitedEvent.id).to.be.equal(eventToMarkFavourite.id);
      expect(commitedEvent.favourite).to.be.true;
    });

    it('Should be able to mark an event favourite', async () => {
      const state: IEventState = {
        events: generateEvents(10),
      };

      state.events[0] = {...state.events[0], favourite: true};
      const eventToUnmarkFavourite = state.events[0];

      await actions.unmarkFavourite({commit}, eventToUnmarkFavourite);

      expect(commit.args[0][0]).to.be.equal(EventMutation.SET_EVENT);

      const commitedEvent: IEvent = commit.args[0][1];
      expect(commitedEvent.id).to.be.equal(eventToUnmarkFavourite.id);
      expect(commitedEvent.favourite).to.be.false;
    });
  });

  describe('Handling errors', () => {
    let fetchStub: SinonStub;
    let markStub: SinonStub;
    let unmarkStub: SinonStub;

    beforeEach(() => {
      fetchStub = sinon.stub(eventApi, 'getAll').throws();
      markStub = sinon.stub(eventApi, 'markFavourite').throws();
      unmarkStub = sinon.stub(eventApi, 'unmarkFavourite').throws();
    });

    afterEach(() => {
      fetchStub.restore();
      markStub.restore();
      unmarkStub.restore();
    });

    it('Should throw an error and reset events if an error occurred when fetching events', async () => {
      await expect(actions.fetchEvents({commit})).to.throw;
      expect(commit.args).to.deep.equal([[
        EventMutation.EVENTS_LOADED,
        [],
      ]]);
    });

    it('Should throw an error if an error occurred when marking an event favourite', async () => {
      await expect(actions.markFavourite({commit}, state.events[0])).to.throw;
      expect(commit).to.not.have.been.called;
    });
    it('Should throw an error if an error occurred when unmarking a favourite event', async () => {
      await expect(actions.unmarkFavourite({commit}, state.events[0])).to.throw;
      expect(commit).to.not.have.been.called;
    });
  });

});
