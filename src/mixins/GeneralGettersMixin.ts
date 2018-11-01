import Component from 'vue-class-component';
import {Getter} from 'vuex-class';
import Vue from 'vue';
import {DeviceSize} from '@/utils/size_decection/deviceSizeUtils';

const namespace: string = 'general';

@Component
export class GeneralGettersMixin extends Vue {
  @Getter('deviceSize', {namespace}) deviceSize!: DeviceSize;
  @Getter('isMobile', {namespace}) isMobile!: boolean;
}
