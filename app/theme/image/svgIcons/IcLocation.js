import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {size} from '../../Size';
import {color} from '../../Colors';

export const Location = props => (
  <Svg
      width={props.width ?? size.moderateScale(20)}
      height={props.height ?? size.moderateScale(20)}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        d="M16.114-.011C9.555-.011 4 5.576 4 12.193c0 6.93 6.439 14.017 10.77 18.998.017.02.717.797 1.579.797h.076c.863 0 1.558-.777 1.575-.797 4.064-4.672 10-12.377 10-18.998C28 5.575 23.667-.011 16.114-.011zm.401 29.86a1.211 1.211 0 01-.131.107 1.218 1.218 0 01-.133-.107l-.523-.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zm-.48-23.805a6 6 0 100 12 6 6 0 000-12zm0 10c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 .001 2.206-1.747 4.044-3.954 4.044z" 
        fill={props.fill ?? color.secondary}
      />
    </Svg>
);
