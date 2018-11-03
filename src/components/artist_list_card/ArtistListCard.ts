import {Component} from 'vue-property-decorator';
import {Routes} from '@/router/routes';
import {mixins} from 'vue-class-component';
import {ArtistMixin} from '@/mixins/ArtistMixin';
import ArtistFavouriteButton from '@/components/artist_favourite_button/ArtistFavouriteButton';

@Component({
  components: {ArtistFavouriteButton},
})
export default class ArtistListCard extends mixins(ArtistMixin) {

  private hovered: boolean = false;

  get classObj() {
    return {
      'md-elevation-1': !this.hovered,
      'md-elevation-8': this.hovered,
    };
  }

  onItemClick() {
    this.$router.push({name: Routes.ARTIST_DETAILS, params: {id: this.artist.id}});
  }

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }

}
