import {IRootState} from '@/store/IRootState';
import {GetterTree} from 'vuex';
import {IArtistState} from './IArtistState';
import {IArtist} from '@s0me1/musicevents-core';

export interface IArtistGetters extends GetterTree<IArtistState, IRootState>{
  favouriteArtists(state: IArtistState): IArtist[];
}
