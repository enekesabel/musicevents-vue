import {IRootState} from '@/store/IRootState';
import {GetterTree} from 'vuex';
import {IGeneralState} from '@/store/modules/general/IGeneralState';
import {DeviceSize} from '@/utils/size_decection/deviceSizeUtils';

export interface IGeneralGetters extends GetterTree<IGeneralState, IRootState> {
  deviceSize(state: IGeneralState): DeviceSize;

  isMobile(state: IGeneralState): boolean;
}
