import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pieChart5 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pie-сhart-5 ${className || ''}`;

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
			<path d="M18.6 18.6L12 12V2.5" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	);
};

pieChart5.propTypes = propTypes;
pieChart5.defaultProps = defaultProps;

export default pieChart5;
