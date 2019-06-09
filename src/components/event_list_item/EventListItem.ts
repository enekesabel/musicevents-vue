import {Component, Inject} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {EventMixin} from '@/mixins/EventMixin';
import EventFavouriteButton from '@/components/event_favourite_button/EventFavouriteButton';
import {Services} from '@/Services';
import {IArtistApi} from '@s0me1/musicevents-core';
import {Routes} from "@/router/routes";

@Component({
  components: {EventFavouriteButton},
})
export default class EventListItem extends mixins(EventMixin) {

  @Inject(Services.ARTIST_API)
  private artistApi!: IArtistApi;

  get description(): string | null {
    return this.event.description && this.event.description.trim() !== '' ? this.event.description.trim() : null;
  }

  get lineup(): string[] {
    return this.event.lineup;
  }

  get hasOtherArtists(): boolean {
    return this.lineup.length > 1;
  }

  async onArtistClick(artistName: string) {
    try {
      const artists = await this.artistApi.search(artistName);
      this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: artists[0].id}});
    } catch (e) {
      this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: 'notfound'}});
    }
  }

}
