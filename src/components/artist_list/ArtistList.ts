import {Component, Prop} from 'vue-property-decorator';
import {IArtist} from '@s0me1/musicevents-core';
import {mixins} from 'vue-class-component';
import ArtistListCard from '@/components/artist_list_card/ArtistListCard';
import ArtistListItem from '@/components/artist_list_item/ArtistListItem';
import {GeneralGettersMixin} from '@/mixins/GeneralGettersMixin';

@Component({
  components: {ArtistListItem, ArtistListCard},
})
export default class ArtistList extends mixins(GeneralGettersMixin) {
  @Prop({
    default: () => ([]),
    required: true,
    type: Array,
  })
  private artists!: IArtist[];
}
