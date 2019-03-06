import React from 'react';
import { propTypes, defaultProps, svgProps } from '../config/props';

const iconName = props => {
  const { size, color, thickness, ends, joins, className, ...restProps } = props;
  const iconClassName = `feather feather-fileName ${className || ''}`;

  return (
    <svg
      {...svgProps}
      width={size}
      height={size}
      stroke={color}
      strokeWidth={thickness}
      strokeLinecap={ends}
      strokeLinejoin={joins}
      className={iconClassName}
      {...restProps}
    >
      <svg-content />
    </svg>
  )
};

iconName.propTypes    = propTypes;
iconName.defaultProps = defaultProps;

export default iconName;
