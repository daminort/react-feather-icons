import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const lineChart = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-line-chart ${className || ''}`;

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
			<path d="M3 3v18h18" />
			<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
		</svg>
	);
};

lineChart.propTypes = propTypes;
lineChart.defaultProps = defaultProps;

export default lineChart;
