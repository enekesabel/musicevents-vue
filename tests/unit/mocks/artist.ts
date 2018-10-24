import {IArtist} from '@s0me1/musicevents-core';

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
      imageUrl: `imageUrl_${i}`,
    };
    artists.push(artist);
  }

  return artists;
};

