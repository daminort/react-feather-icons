import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const xSquare = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-x-square ${className || ''}`;

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
			<line x1="9" y1="9" x2="15" y2="15" />
			<line x1="15" y1="9" x2="9" y2="15" />
		</svg>
	);
};

xSquare.propTypes = propTypes;
xSquare.defaultProps = defaultProps;

export default xSquare;
