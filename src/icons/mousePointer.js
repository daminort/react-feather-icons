import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const mousePointer = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-mouse-pointer ${className || ''}`;

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
			<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
			<path d="M13 13l6 6" />
		</svg>
	);
};

mousePointer.propTypes = propTypes;
mousePointer.defaultProps = defaultProps;

export default mousePointer;
