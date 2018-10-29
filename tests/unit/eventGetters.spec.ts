import {expect} from 'chai';
import {IEvent} from '@s0me1/musicevents-core';
import {generateEvents} from './mocks/event';
import {IEventState} from '../../src/store/modules/event/IEventState';
import {getters} from '../../src/store/modules/event/getters';

describe('EventGetters', () => {

  let events: IEvent[];
  let state: IEventState;

  beforeEach(() => {
    events = generateEvents(10);
    state = {
      events,
    };
  });

  describe('favouriteEvents', () => {

    it('Should return the favourite events', () => {
      const favouriteIndicies = [3, 7];
      const favouriteEvents: IEvent[] = [];

      favouriteIndicies.forEach((i) => {
        state.events[i] = {...state.events[i], favourite: true};
        favouriteEvents.push(state.events[i]);
      });

      const favourites = getters.favouriteEvents(state);

      expect(favourites).to.have.members(favouriteEvents);
    });
  });

});
