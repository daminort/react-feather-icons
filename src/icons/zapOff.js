import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const zapOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-zap-off ${className || ''}`;

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
			<polyline points="12.41 6.75 13 2 10.57 4.92" />
			<polyline points="18.57 12.91 21 10 15.66 10" />
			<polyline points="8 8 3 14 12 14 11 22 16 16" />
			<line x1="1" y1="1" x2="23" y2="23" />
		</svg>
	);
};

zapOff.propTypes = propTypes;
zapOff.defaultProps = defaultProps;

export default zapOff;
