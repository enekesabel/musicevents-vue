import {Component, Prop, Vue} from 'vue-property-decorator';
import {IArtist} from '@s0me1/musicevents-core';

@Component
export class ArtistMixin extends Vue {

  @Prop({
    required: true,
  })
  protected artist!: IArtist;

}
