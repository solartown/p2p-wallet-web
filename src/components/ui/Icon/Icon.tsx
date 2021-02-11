import React from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { CSSProperties } from '@linaria/core';

import arrowTriangle from './assets/arrow-triangle-icon.svg';
import bottom from './assets/bottom-icon.svg';
import change from './assets/change-icon.svg';
import checkmark from './assets/checkmark-icon.svg';
import chevron1 from './assets/chevron-1-icon.svg';
import chevron from './assets/chevron-icon.svg';
import close from './assets/close-icon.svg';
import copy from './assets/copy-icon.svg';
import gear from './assets/gear-icon.svg';
import home from './assets/home-icon.svg';
import logout from './assets/logout-icon.svg';
import pen from './assets/pen-icon.svg';
import plug from './assets/plug-icon.svg';
import plus from './assets/plus-icon.svg';
import qr from './assets/qr-icon.svg';
import search from './assets/search-icon.svg';
import settings from './assets/settings-icon.svg';
import success from './assets/success-icon.svg';
import swap from './assets/swap-icon.svg';
import top from './assets/top-icon.svg';
import wallet from './assets/wallet-icon.svg';
import warning from './assets/warning-icon.svg';

export type SvgIconType = {
  viewBox: string;
  id: string;
};

const iconsMap = new Map<string, SvgIconType>([
  ['arrow-triangle', arrowTriangle],
  ['bottom', bottom],
  ['change', change],
  ['checkmark', checkmark],
  ['chevron-1', chevron1],
  ['chevron', chevron],
  ['close', close],
  ['copy', copy],
  ['gear', gear],
  ['search', search],
  ['settings', settings],
  ['success', success],
  ['swap', swap],
  ['home', home],
  ['logout', logout],
  ['pen', pen],
  ['plug', plug],
  ['plus', plus],
  ['qr', qr],
  ['top', top],
  ['wallet', wallet],
  ['warning', warning],
]);

export type IconType = {
  name: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  style?: CSSProperties;
  className?: string;
};

export const Icon: React.FunctionComponent<IconType> = ({
  name,
  size,
  height,
  width,
  ...props
}) => {
  const validProps: {
    [prop: string]: any;
  } = {};

  Object.keys(props).forEach((prop) => {
    if (isPropValid(prop)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      validProps[prop] = props[prop];
    }
  });

  const icon = iconsMap.get(name);

  if (!icon) {
    return null;
  }

  return (
    <svg {...validProps} viewBox={icon.viewBox} height={size || height} width={size || width}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};
