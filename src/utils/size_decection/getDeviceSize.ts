import {Breakpoints, DeviceSize} from './deviceSizeUtils';

export const getDeviceSize: (width: number) => DeviceSize = (width: number) => {

  const deviceSizes = Object.keys(Breakpoints);
  for (let i = 0; i < deviceSizes.length; i++) {
    const deviceSize = deviceSizes[i] as DeviceSize;
    const breakpointWidth = Breakpoints[deviceSize];

    if (width < breakpointWidth) {
      return deviceSize;
    }
  }

  return DeviceSize.XL;
};
