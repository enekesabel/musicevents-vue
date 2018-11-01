import {expect} from 'chai';
import {Breakpoints, DeviceSize} from '../../src/utils/size_decection/deviceSizeUtils';
import {getDeviceSize} from '../../src/utils/size_decection/getDeviceSize';

describe('SizeDetection', () => {

  it('Should return the smaller size right below a breakpoint', () => {

    Object.keys(Breakpoints).forEach((deviceSize) => {
      const breakpointWidth = Breakpoints[deviceSize as DeviceSize];

      const calculatedSize = getDeviceSize(breakpointWidth - 1);
      expect(calculatedSize).to.be.equal(deviceSize);

    });
  });

  it('Should return the greater size on a breakpoint', () => {

    const deviceSizes = Object.keys(Breakpoints);
    for (let i = 0; i < deviceSizes.length; i++) {
      const deviceSize = deviceSizes[i];
      const breakpointWidth = Breakpoints[deviceSize as DeviceSize];

      const calculatedSize = getDeviceSize(breakpointWidth);
      const expectedDeviceSize = i < deviceSizes.length - 1 ? deviceSizes[i + 1] : DeviceSize.XL;

      expect(calculatedSize).to.be.equal(expectedDeviceSize);

    }
  });

});
