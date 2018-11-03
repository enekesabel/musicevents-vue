import {Component, Vue} from 'vue-property-decorator';
import {IArtist} from '@s0me1/musicevents-core';
import {generateArtists} from '../../../tests/unit/mocks/artist';
import ArtistFavouriteButton from '@/components/artist_favourite_button/ArtistFavouriteButton';

@Component({
  components: {ArtistFavouriteButton},
})
export default class ArtistDetails extends Vue {

  private artist: IArtist = generateArtists(1)[0];
}
