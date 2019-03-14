import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pieChart2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pie-сhart-2 ${className || ''}`;

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

			<path d="M12 2a10 10 0 1 0 10 10H12V2zM21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18" />
		</svg>
	);
};

pieChart2.propTypes = propTypes;
pieChart2.defaultProps = defaultProps;

export default pieChart2;
