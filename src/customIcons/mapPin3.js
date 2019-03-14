import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const mapPin3 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-map-pin-3 ${className || ''}`;

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
			<circle cx="11.5" cy="8.5" r="5.5" />
			<path d="M11.5 14v7" />
		</svg>
	);
};

mapPin3.propTypes = propTypes;
mapPin3.defaultProps = defaultProps;

export default mapPin3;
