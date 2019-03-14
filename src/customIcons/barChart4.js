import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const barChart4 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bar-сhart-4 ${className || ''}`;

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
			<path d="M12 20v-6M6 20V10M18 20V4" />
		</svg>
	);
};

barChart4.propTypes = propTypes;
barChart4.defaultProps = defaultProps;

export default barChart4;
