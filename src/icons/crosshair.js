import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const crosshair = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-crosshair ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<line x1="22" y1="12" x2="18" y2="12" />
			<line x1="6" y1="12" x2="2" y2="12" />
			<line x1="12" y1="6" x2="12" y2="2" />
			<line x1="12" y1="22" x2="12" y2="18" />
		</svg>
	);
};

crosshair.propTypes = propTypes;
crosshair.defaultProps = defaultProps;

export default crosshair;
