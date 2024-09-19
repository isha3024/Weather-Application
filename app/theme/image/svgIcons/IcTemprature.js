import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { size } from '../../Size';
import { color } from '../../Colors';

export const Temprature = props => (
  <Svg
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(20)}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-thermometer-high"
    fill={props.fill ?? color.secondary}
    {...props}
  >
    <Path d="M9.5 12.5a1.5 1.5 0 11-2-1.415V2.5a.5.5 0 011 0v8.585a1.5 1.5 0 011 1.415z" />
    <Path d="M5.5 2.5a2.5 2.5 0 015 0v7.55a3.5 3.5 0 11-5 0V2.5zM8 1a1.5 1.5 0 00-1.5 1.5v7.987l-.167.15a2.5 2.5 0 103.333 0l-.166-.15V2.5A1.5 1.5 0 008 1z" />
  </Svg>
);
