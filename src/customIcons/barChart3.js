import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const barChart3 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bar-сhart-3 ${className || ''}`;

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
			<path d="M12 20V10M6 20V4M18 20v-4" />
		</svg>
	);
};

barChart3.propTypes = propTypes;
barChart3.defaultProps = defaultProps;

export default barChart3;
