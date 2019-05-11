import {Component, Watch} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {EventMixin} from '@/mixins/EventMixin';
import {IArtist} from '@s0me1/musicevents-core';
import {EventModuleMixin} from '@/mixins/EventModuleMixin';

@Component
export default class EventFavouriteButton extends mixins(EventMixin, EventModuleMixin) {

  private localFavourite: boolean = false;

  get icon(): string {
    return this.localFavourite ? 'star' : 'star_border';
  }

  get tooltip(): string {
    return this.localFavourite ? 'Remove from favourites' : 'Add to favourites';
  }

  onClick() {
    if (this.localFavourite) {
      this.unmarkFavourite(this.event);
    } else {
      this.markFavourite(this.event);
    }
    this.localFavourite = !this.localFavourite;
  }

  @Watch('event', {immediate: true})
  private onArtistChange(artist: IArtist) {
    this.localFavourite = artist.favourite;
  }
}
