import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { size } from '../../Size';
import { color } from '../../Colors';

export const Wind = props => (
  <Svg
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(20)}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill ?? color.secondary}
    {...props}
  >
    <Path d="M13 11.261c.038 0 .07-.018.107-.021a5.245 5.245 0 10-5.159-6.666l-.009.037-.012.025a5.195 5.195 0 00-.182 1.371 1.25 1.25 0 002.5 0c0-.254.035-.499.099-.732l-.005.019.006-.012A2.75 2.75 0 1113 8.75c-.019 0-.034.01-.053.011L2.015 8.75a1.25 1.25 0 00-.001 2.5l10.985.011zm11.469-6.392a6.793 6.793 0 00-6.527 4.942l-.012.048-.013.026a6.62 6.62 0 00-.235 1.768v.005a1.25 1.25 0 002.5 0v-.007c0-.393.054-.774.155-1.135l-.007.03.007-.013c.509-1.837 2.166-3.163 4.133-3.163a4.281 4.281 0 010 8.562c-.026 0-.047.013-.072.015l-20.34-.02a1.25 1.25 0 00-.001 2.5l20.413.02c.053-.008.099-.017.144-.029l-.008.002a6.776 6.776 0 00-.131-13.549h-.006zm-1.751 14.44a1.105 1.105 0 00-.11-.023l-.006-.001-18.546.018a1.25 1.25 0 000 2.5h.001l18.487-.018c.02.001.037.012.058.012a3.443 3.443 0 11-3.318 4.365l-.006-.024-.007-.015a3.415 3.415 0 01-.118-.89v-.005a1.25 1.25 0 10-2.5 0v.012c0 .55.075 1.082.214 1.587l-.01-.042c.005.017.016.029.021.045.717 2.533 3.009 4.357 5.726 4.357a5.941 5.941 0 00.12-11.881h-.006z" />
  </Svg>
);
