import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const batteryCharging = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-battery-charging ${className || ''}`;

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
			<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
			<line x1="23" y1="13" x2="23" y2="11" />
			<polyline points="11 6 7 12 13 12 9 18" />
		</svg>
	);
};

batteryCharging.propTypes = propTypes;
batteryCharging.defaultProps = defaultProps;

export default batteryCharging;
