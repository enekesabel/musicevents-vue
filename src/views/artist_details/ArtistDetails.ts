import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import {IArtist, IArtistApi, IEvent, IEventApi} from '@s0me1/musicevents-core';
import ArtistFavouriteButton from '@/components/artist_favourite_button/ArtistFavouriteButton';
import {Services} from '@/Services';
import EventList from '@/components/event_list/EventList';

@Component({
  components: {ArtistFavouriteButton, EventList},
})
export default class ArtistDetails extends Vue {

  @Inject(Services.ARTIST_API)
  private artistApi!: IArtistApi;
  @Inject(Services.EVENT_API)
  private eventApi!: IEventApi;

  @Prop({
    required: true,
  })
  private id!: string;

  private artist: IArtist | null = null;
  private events: IEvent[] = [];

  async created() {
    this.artist = await this.artistApi.get(this.id);
    if (this.artist) {
      this.events = await this.eventApi.find(this.artist);
    }
  }
}
