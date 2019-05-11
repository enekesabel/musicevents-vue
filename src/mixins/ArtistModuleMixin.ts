import Component from 'vue-class-component';
import {Action, Getter, State} from 'vuex-class';
import Vue from 'vue';
import {IArtist} from '@s0me1/musicevents-core';

const namespace: string = 'artist';

@Component
export class ArtistModuleMixin extends Vue {

  @State('artists', {namespace}) artists!: IArtist[];

  @Getter('favouriteArtists', {namespace}) favouriteArtists!: IArtist[];

  @Action('fetchArtists', {namespace}) fetchArtists!: Promise<void>;
  @Action('markFavourite', {namespace}) markFavourite!: (artist: IArtist) => Promise<void>;
  @Action('unmarkFavourite', {namespace}) unmarkFavourite!: (artist: IArtist) => Promise<void>;

}
