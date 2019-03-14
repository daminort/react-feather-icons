import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pieChart4 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pie-сhart-4 ${className || ''}`;

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
			<path d="M21.5 12H12V2.5" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	);
};

pieChart4.propTypes = propTypes;
pieChart4.defaultProps = defaultProps;

export default pieChart4;
