import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const umbrella = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-umbrella ${className || ''}`;

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
			<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
		</svg>
	);
};

umbrella.propTypes = propTypes;
umbrella.defaultProps = defaultProps;

export default umbrella;
