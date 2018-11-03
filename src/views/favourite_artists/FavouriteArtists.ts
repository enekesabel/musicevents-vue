import {Component} from 'vue-property-decorator';
import {IArtist} from '@s0me1/musicevents-core';
import {generateArtists} from '../../../tests/unit/mocks/artist';
import ArtistList from '@/components/artist_list/ArtistList';
import Vue from 'vue';

@Component({
  components: {ArtistList},
})
export default class FavouriteArtists extends Vue {

  artists: IArtist[] = generateArtists(10);
}
