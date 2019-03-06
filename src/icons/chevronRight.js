import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevron-right ${className || ''}`;

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
			<polyline points="9 18 15 12 9 6" />
		</svg>
	);
};

chevronRight.propTypes = propTypes;
chevronRight.defaultProps = defaultProps;

export default chevronRight;
