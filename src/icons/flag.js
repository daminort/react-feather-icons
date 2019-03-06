import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const flag = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-flag ${className || ''}`;

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
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
			<line x1="4" y1="22" x2="4" y2="15" />
		</svg>
	);
};

flag.propTypes = propTypes;
flag.defaultProps = defaultProps;

export default flag;
