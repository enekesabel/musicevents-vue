import Vue from 'vue';
import Component from 'vue-class-component';
import {Routes} from '@/router/routes';

@Component
export default class App extends Vue {
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

  closeDrawer() {
    this.drawerVisible = false;
  }
}
