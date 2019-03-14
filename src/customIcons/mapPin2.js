import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const mapPin2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-map-pin-2 ${className || ''}`;

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
			<circle cx="12" cy="10" r="3" />
			<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
		</svg>
	);
};

mapPin2.propTypes = propTypes;
mapPin2.defaultProps = defaultProps;

export default mapPin2;
