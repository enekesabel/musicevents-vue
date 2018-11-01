import {MutationTree} from 'vuex';
import {DeviceSize} from '@/utils/size_decection/deviceSizeUtils';
import {IGeneralState} from '@/store/modules/general/IGeneralState';

export enum GeneralMutation {
  SET_DEVICE_SIZE = 'SET_DEVICE_SIZE',
}

export const mutations: MutationTree<IGeneralState> = {
  [GeneralMutation.SET_DEVICE_SIZE](state, payload: DeviceSize) {
    state.deviceSize = payload;
  },
};
