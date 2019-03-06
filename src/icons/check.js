import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const check = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-check ${className || ''}`;

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
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
};

check.propTypes = propTypes;
check.defaultProps = defaultProps;

export default check;
