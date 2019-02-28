import React from 'react';
import { propTypes, defaultProps, svgProps } from '../config/props';

const IconSVG = props => {
  const { size, color, thickness, ends, joins, className, ...restProps } = props;

  return (
    <svg
      {...svgProps}
      width={size}
      height={size}
      stroke={color}
      strokeWidth={thickness}
      strokeLinecap={ends}
      strokeLinejoin={joins}
      className={className}
      {...restProps}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
};

IconSVG.displayName = 'activity';
IconSVG.propTypes    = propTypes;
IconSVG.defaultProps = defaultProps;

export default IconSVG;
