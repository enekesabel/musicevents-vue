import {Component, Vue} from 'vue-property-decorator';
import ArtistListItem from '@/components/artist_list_item/ArtistListItem';
import {IArtist} from '@s0me1/musicevents-core';
import {generateArtists} from '../../../tests/unit/mocks/artist';
import {mixins} from 'vue-class-component';
import {GeneralGettersMixin} from '@/mixins/GeneralGettersMixin';
import ArtistListCard from '@/components/artist_list_card/ArtistListCard';

@Component({
  components: {ArtistListItem, ArtistListCard},
})
export default class ArtistList extends mixins(GeneralGettersMixin) {

  artists: IArtist[] = generateArtists(10);
}
