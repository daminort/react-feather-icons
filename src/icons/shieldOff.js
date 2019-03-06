import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const shieldOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-shield-off ${className || ''}`;

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
			<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
			<path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
			<line x1="1" y1="1" x2="23" y2="23" />
		</svg>
	);
};

shieldOff.propTypes = propTypes;
shieldOff.defaultProps = defaultProps;

export default shieldOff;
