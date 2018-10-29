import {expect} from 'chai';
import {EventMutation, mutations} from '../../src/store/modules/event/mutations';
import {IEvent} from '@s0me1/musicevents-core';
import {generateEvents} from './mocks/event';
import {IEventState} from '@/store/modules/event/IEventState';

describe('EventMutations', () => {

  let events: IEvent[];

  beforeEach(() => {
    events = generateEvents(10);
  });

  describe(`${EventMutation.SET_EVENT}`, () => {

    it('Should add a new event if there are no events yet', () => {
      const mutation = mutations[EventMutation.SET_EVENT];
      const state: IEventState = {
        events: [],
      };
      const event: IEvent = events[0];

      mutation(state, event);

      expect(state.events).to.be.lengthOf(1);
      expect(state.events).to.include(event);
    });

    it('Should override the event, if it is already included', () => {
      const mutation = mutations[EventMutation.SET_EVENT];
      const state: IEventState = {
        events: [...events],
      };
      const oldEvent = state.events[0];

      const event: IEvent = {
        ...oldEvent,
        locationName: 'New name',
      };

      mutation(state, event);

      expect(state.events).to.be.lengthOf(events.length);
      expect(state.events).to.include(event);
      expect(state.events).not.to.include(oldEvent);
    });

  });

  describe(`${EventMutation.EVENTS_LOADED}`, () => {

    it('Should override the old events array', () => {
      const mutation = mutations[EventMutation.EVENTS_LOADED];
      const state: IEventState = {
        events: [...events],
      };
      const newEvents: IEvent[] = [];

      mutation(state, newEvents);

      expect(state.events).to.be.equal(newEvents);

    });

  });

});
