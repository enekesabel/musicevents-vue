import {IRootState} from '../../IRootState';
import {Module} from 'vuex';
import {IGeneralState} from './IGeneralState';
import {DeviceSize} from '@/utils/size_decection/deviceSizeUtils';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';

export const state: IGeneralState = {
  deviceSize: DeviceSize.XS,
};

const namespaced: boolean = true;
const generalModule: Module<IGeneralState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default generalModule;
