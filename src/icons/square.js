import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const square = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-square ${className || ''}`;

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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
		</svg>
	);
};

square.propTypes = propTypes;
square.defaultProps = defaultProps;

export default square;
