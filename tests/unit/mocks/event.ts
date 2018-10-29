import {IEvent, IEventApi} from '@s0me1/musicevents-core';

export const generateEvents = (count: number) => {
  const events: IEvent[] = [];
  for (let i = 0; i < count; i++) {
    const event: IEvent = {
      serialize() {
        return this;
      },
      id: i.toString(),
      favourite: false,
      artistId: `artist_${i}`,
      city: `city_${i}`,
      datetime: `datetime_${i}`,
      description: `description_${i}`,
      locationName: `location_${i}`,
    };
    events.push(event);
  }

  return events;
};

export const createMockEventApi: () => IEventApi = () => {
  const events = generateEvents(10);

  return {
    async get(id: string) {
      const event = events.find(a => a.id === id);
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    },
    async getAll(): Promise<IEvent[]> {
      return events;
    },
    async markFavourite(id: string) {
      const eventIndex = events.findIndex(e => e.id === id);
      if (eventIndex === -1) {
        throw new Error('Event not found');
      }
      events[eventIndex] = {
        ...events[eventIndex],
        favourite: true,
      };
    },
    async unmarkFavourite(id: string) {
      const eventIndex = events.findIndex(e => e.id === id);
      if (eventIndex === -1) {
        throw new Error('Event not found');
      }
      events[eventIndex] = {
        ...events[eventIndex],
        favourite: false,
      };
    },
    async find(artistName: string) {
      // isn't supposed to work correctly
      return events.filter(e => e.artistId.indexOf(artistName) !== -1);
    },
  };
};
