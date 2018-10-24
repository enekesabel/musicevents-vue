import {IRootState} from '@/store/IRootState';
import {IArtistState} from '@/store/modules/artist/IArtistState';
import {ActionTree} from 'vuex';
import {IArtist} from '@s0me1/musicevents-core';

export interface IArtistActions extends ActionTree<IArtistState, IRootState> {
  fetchArtists({commit}: any): Promise<void>;

  markFavourite({commit}: any, artist: IArtist): Promise<void>;

  unmarkFavourite({commit}: any, artist: IArtist): Promise<void>;
}
