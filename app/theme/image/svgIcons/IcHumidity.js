import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { size } from '../../Size';
import { color } from '../../Colors';

export const Humidity = props => (
  <Svg
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(27)}
    viewBox="0 0 23 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.512.517a1.251 1.251 0 00-2.024 0C9.504 1.876.875 13.949.875 19.375.875 25.234 5.641 30 11.5 30s10.625-4.766 10.625-10.625c0-5.426-8.629-17.5-9.613-18.858zM11.5 27.5c-4.48 0-8.125-3.645-8.125-8.125 0-3.466 5.177-11.685 8.125-15.956 2.948 4.271 8.125 12.49 8.125 15.956 0 4.48-3.645 8.125-8.125 8.125z"
      fill={props.fill ?? color.secondary}
    />
  </Svg>
);
