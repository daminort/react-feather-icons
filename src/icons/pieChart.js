import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pieChart = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pie-chart ${className || ''}`;

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
			<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
			<path d="M22 12A10 10 0 0 0 12 2v10z" />
		</svg>
	);
};

pieChart.propTypes = propTypes;
pieChart.defaultProps = defaultProps;

export default pieChart;
