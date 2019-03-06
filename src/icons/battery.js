import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const battery = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-battery ${className || ''}`;

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
			<rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
			<line x1="23" y1="13" x2="23" y2="11" />
		</svg>
	);
};

battery.propTypes = propTypes;
battery.defaultProps = defaultProps;

export default battery;
