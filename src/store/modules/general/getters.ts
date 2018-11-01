import {IGeneralGetters} from '@/store/modules/general/IGeneralGetters';
import {DeviceSize} from '@/utils/size_decection/deviceSizeUtils';

export const getters: IGeneralGetters = {
  deviceSize(state): DeviceSize {
    return state.deviceSize;
  },

  isMobile(state): boolean {
    return state.deviceSize === DeviceSize.XS;
  },
};
