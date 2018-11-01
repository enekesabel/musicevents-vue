import Component from 'vue-class-component';
import {Action} from 'vuex-class';
import Vue from 'vue';

const namespace: string = 'general';

@Component
export class GeneralActionsMixin extends Vue {
  @Action('calculateDeviceSize', {namespace}) calculateDeviceSize: any;
}
