import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevron-left ${className || ''}`;

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
			<polyline points="15 18 9 12 15 6" />
		</svg>
	);
};

chevronLeft.propTypes = propTypes;
chevronLeft.defaultProps = defaultProps;

export default chevronLeft;
