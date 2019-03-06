import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const circle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-circle ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
		</svg>
	);
};

circle.propTypes = propTypes;
circle.defaultProps = defaultProps;

export default circle;
