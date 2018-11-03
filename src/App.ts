import Component, {mixins} from 'vue-class-component';
import {Routes} from '@/router/routes';
import {GeneralActionsMixin} from '@/mixins/GeneralActionsMixin';
import {GeneralGettersMixin} from '@/mixins/GeneralGettersMixin';
import MainToolbarRow from '@/components/main_toolbar_row/MainToolbarRow';

@Component({
  components: {MainToolbarRow},
})
export default class App extends mixins(GeneralActionsMixin, GeneralGettersMixin) {
  private drawerVisible: boolean = false;

  Routes = Routes;

  created() {
    this.calculateDeviceSize(window.innerWidth);
  }

  closeDrawer() {
    this.drawerVisible = false;
  }
}
