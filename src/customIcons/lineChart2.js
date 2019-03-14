import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const lineChart2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-line-chart-2 ${className || ''}`;

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
			<path d="M18.7 14.3L15 10.5l-2.7 2.7L7 8" />
		</svg>
	);
};

lineChart2.propTypes = propTypes;
lineChart2.defaultProps = defaultProps;

export default lineChart2;
