import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { size } from '../../Size';
import { color } from '../../Colors';

export const Search = props => (
  <Svg
    width={props.width ?? size.moderateScale(25)}
    height={props.width ?? size.moderateScale(25)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
      stroke={props.stroke ?? color.secondary}
      strokeWidth={props.strokeWidth ?? size.moderateScale(2)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
