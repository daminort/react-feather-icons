import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronDown = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevron-down ${className || ''}`;

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
			<polyline points="6 9 12 15 18 9" />
		</svg>
	);
};

chevronDown.propTypes = propTypes;
chevronDown.defaultProps = defaultProps;

export default chevronDown;
