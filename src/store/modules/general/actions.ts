import {IGeneralActions} from './IGeneralActions';
import {GeneralMutation} from '@/store/modules/general/mutations';
import {getDeviceSize} from '@/utils/size_decection/getDeviceSize';

export const actions: IGeneralActions = {
  calculateDeviceSize({commit}, width: number) {
    commit(GeneralMutation.SET_DEVICE_SIZE, getDeviceSize(width));
  },
};
