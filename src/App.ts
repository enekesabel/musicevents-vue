import Component, {mixins} from 'vue-class-component';
import {Routes} from '@/router/routes';
import {GeneralActionsMixin} from '@/mixins/GeneralActionsMixin';
import {GeneralGettersMixin} from '@/mixins/GeneralGettersMixin';

@Component
export default class App extends mixins(GeneralActionsMixin, GeneralGettersMixin) {
  private drawerVisible: boolean = false;

  Routes = Routes;

  selectedArtist = null;
  artists = [
    'Jim Halpert',
    'Dwight Schrute',
    'Michael Scott',
    'Pam Beesly',
    'Angela Martin',
    'Kelly Kapoor',
    'Ryan Howard',
    'Kevin Malone',
    'Creed Bratton',
    'Oscar Nunez',
    'Toby Flenderson',
    'Stanley Hudson',
    'Meredith Palmer',
    'Phyllis Lapin-Vance',
  ];

  created() {
    this.calculateDeviceSize(window.innerWidth);
  }

  closeDrawer() {
    this.drawerVisible = false;
  }
}
