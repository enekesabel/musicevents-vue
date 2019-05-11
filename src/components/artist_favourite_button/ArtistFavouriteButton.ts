import {Component, Watch} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {ArtistMixin} from '@/mixins/ArtistMixin';
import {ArtistModuleMixin} from '@/mixins/ArtistModuleMixin';
import {IArtist} from '@s0me1/musicevents-core';

@Component
export default class ArtistFavouriteButton extends mixins(ArtistMixin, ArtistModuleMixin) {

  private localFavourite: boolean = false;

  get icon(): string {
    return this.localFavourite ? 'favorite' : 'favorite_border';
  }

  onClick() {
    if (this.localFavourite) {
      this.unmarkFavourite(this.artist);
    } else {
      this.markFavourite(this.artist);
    }
    this.localFavourite = !this.localFavourite;
  }

  @Watch('artist', {immediate: true})
  private onArtistChange(artist: IArtist) {
    this.localFavourite = artist.favourite;
  }

}
