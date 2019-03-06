import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const thermometer = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-thermometer ${className || ''}`;

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
			<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
		</svg>
	);
};

thermometer.propTypes = propTypes;
thermometer.defaultProps = defaultProps;

export default thermometer;
