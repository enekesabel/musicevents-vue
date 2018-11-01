export enum DeviceSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}

// maps breakpoints to device sizes
// tslint:disable-next-line
export const Breakpoints: {[K in DeviceSize]: number} = {
  [DeviceSize.XS]: 600,
  [DeviceSize.SM]: 960,
  [DeviceSize.MD]: 1280,
  [DeviceSize.LG]: 1920,
  [DeviceSize.XL]: Infinity,
};
