import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const SvgTools = (props: SvgIconProps) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.586 13.672l-.023 6.566.937.926-.984 2.824L1.629 24l-.945-2.809.949-.941.07-6.566zM17.199 0l.426.184c.754.32 1.418.761 1.973 1.308C22.09 3.957 22.063 8 19.53 10.5c-.394.39-.843.73-1.34 1.012l-.05 6.87a3.706 3.706 0 01-.594 4.516c-1.469 1.454-3.867 1.47-5.317.04-1.222-1.211-1.386-3.083-.53-4.512l.046-6.871a6.05 6.05 0 01-1.324-.992c-2.496-2.47-2.469-6.508.062-9.008A6.518 6.518 0 0112.473.219l.43-.188-.02 3.008a2.101 2.101 0 002.133 2.11 2.197 2.197 0 001.523-.633 2.14 2.14 0 00.637-1.508zm-1.144 19.156a1.607 1.607 0 00-2.278.016c-.644.637-.648 1.625-.015 2.254.633.625 1.633.617 2.277-.016.64-.637.648-1.629.016-2.254zM3.809 0C4.855-.008 5.71.836 5.703 1.871L5.7 8.336c-.008.836-.586 1.543-1.355 1.789l.355.516c.414.617-.047 1.449-.808 1.453l-2.137.015a.925.925 0 01-.785-1.445l.36-.52C.562 9.91-.005 9.212 0 8.376l.023-6.484C.027 1.37.234.902.578.562c.348-.343.82-.546 1.344-.55zm0 0" />,
  );

export default SvgTools;