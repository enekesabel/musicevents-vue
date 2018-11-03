import Component, {mixins} from 'vue-class-component';
import {GeneralGettersMixin} from '@/mixins/GeneralGettersMixin';
import {Model, Prop, Watch} from 'vue-property-decorator';
import ArtistSearch from '@/components/artist_search/ArtistSearch';

@Component({
  components: {ArtistSearch},
})
export default class MainToolbarRow extends mixins(GeneralGettersMixin) {

  @Model('update:drawerVisible')
  @Prop({
    type: Boolean,
    required: true,
  })
  private drawerVisible: boolean = false;

  private localDrawerVisible: boolean = false;
  private localSearchShown: boolean = false

  get searchShown(): boolean {
    return !this.isMobile || this.localSearchShown;
  }

  toggleDrawer() {
    this.localDrawerVisible = !this.localDrawerVisible;
  }

  showSearch() {
    this.localSearchShown = true;
  }
  hideSearch() {
    this.localSearchShown = false;
  }

  @Watch('drawerVisible', {immediate: true})
  onDrawerVisibleChange(drawerVisible: boolean) {
    this.localDrawerVisible = drawerVisible;
  }

  @Watch('localDrawerVisible')
  onLocalDrawerVisibleChange(localDrawerVisible: boolean) {
    if (this.drawerVisible !== localDrawerVisible) {
      this.$emit('update:drawerVisible', localDrawerVisible);
    }
  }
}
