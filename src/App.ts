import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  private menuVisible: boolean = false;

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
    'Phyllis Lapin-Vance'
  ];
}
