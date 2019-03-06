import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const minusSquare = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-minus-square ${className || ''}`;

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
			<line x1="8" y1="12" x2="16" y2="12" />
		</svg>
	);
};

minusSquare.propTypes = propTypes;
minusSquare.defaultProps = defaultProps;

export default minusSquare;
