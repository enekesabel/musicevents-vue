import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import {IArtist, IArtistApi} from '@s0me1/musicevents-core';
import ArtistFavouriteButton from '@/components/artist_favourite_button/ArtistFavouriteButton';
import {Services} from '@/Services';

@Component({
  components: {ArtistFavouriteButton},
})
export default class ArtistDetails extends Vue {

  @Inject(Services.ARTIST_API)
  private artistApi!: IArtistApi;

  @Prop({
    required: true,
  })
  private id!: string;

  private artist: IArtist | null = null;

  async created() {
    this.artist = await this.artistApi.get(this.id);
  }
}
