import {IArtist, IArtistApi} from '@s0me1/musicevents-core';

export const generateArtists = (count: number) => {
  const artists: IArtist[] = [];
  for (let i = 0; i < count; i++) {
    const artist: IArtist = {
      serialize() {
        return this;
      },
      id: i.toString(),
      favourite: false,
      name: `Artist_${i}`,
      facebookPageUrl: `facebookPageUrl_${i}`,
      imageUrl: `https://placeimg.com/40/40/people/1/${i}`,
    };
    artists.push(artist);
  }

  return artists;
};

export const createMockArtistApi: () => IArtistApi = () => {
  const artists = generateArtists(10);

  return {
    async get(id: string) {
      const artist = artists.find(a => a.id === id);
      if (!artist) {
        throw new Error('Artist not found');
      }
      return artist;
    },
    async getAll(): Promise<IArtist[]> {
      return artists;
    },
    async markFavourite(id: string) {
      const artistIndex = artists.findIndex(a => a.id === id);
      if (artistIndex === -1) {
        throw new Error('Artist not found');
      }
      artists[artistIndex] = {
        ...artists[artistIndex],
        favourite: true,
      };
    },
    async unmarkFavourite(id: string) {
      const artistIndex = artists.findIndex(a => a.id === id);
      if (artistIndex === -1) {
        throw new Error('Artist not found');
      }
      artists[artistIndex] = {
        ...artists[artistIndex],
        favourite: false,
      };
    },
    async find(artistName: string) {
      return artists.filter(a => a.name.indexOf(artistName) !== -1);
    },
    async search(artistName: string) {
      return artists.filter(a => a.name.indexOf(artistName) !== -1)
        .map(a => ({name: a.name}));
    },
  };
};
