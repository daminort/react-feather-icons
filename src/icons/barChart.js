import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const barChart = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bar-chart ${className || ''}`;

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
			<line x1="12" y1="20" x2="12" y2="10" />
			<line x1="18" y1="20" x2="18" y2="4" />
			<line x1="6" y1="20" x2="6" y2="16" />
		</svg>
	);
};

barChart.propTypes = propTypes;
barChart.defaultProps = defaultProps;

export default barChart;
