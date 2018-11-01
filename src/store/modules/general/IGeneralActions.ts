import {IRootState} from '@/store/IRootState';
import {ActionTree} from 'vuex';
import {IGeneralState} from '@/store/modules/general/IGeneralState';

export interface IGeneralActions extends ActionTree<IGeneralState, IRootState> {

  calculateDeviceSize({commit}: any, width: number): void;
}
