import React from 'react';
import icons from '../icons';
import { containerPropTypes, defaultProps } from '../config/props';

const Icon = props => {
  const { name, ...restProps } = props;
  const IconSVG = icons[name];
  if (!IconSVG) {
    return null;
  }

  return (
    <IconSVG {...restProps} />
  )
};

Icon.propTypes    = containerPropTypes;
Icon.defaultProps = defaultProps;

export default Icon;
