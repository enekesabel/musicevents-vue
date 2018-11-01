import {Component, Prop, Vue} from 'vue-property-decorator';
import {IArtist} from '@s0me1/musicevents-core';
import {Routes} from '@/router/routes';

@Component
export default class ArtistListItem extends Vue {

  @Prop({
    required: true,
  })
  private artist!: IArtist;

  onItemClick() {
    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: this.artist.id}});
  }

  onFavouriteClick() {
    console.log('favourite click');
  }

}
