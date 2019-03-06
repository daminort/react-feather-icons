import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const power = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-power ${className || ''}`;

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
			<path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
			<line x1="12" y1="2" x2="12" y2="12" />
		</svg>
	);
};

power.propTypes = propTypes;
power.defaultProps = defaultProps;

export default power;
