import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pieChart3 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pie-сhart-3 ${className || ''}`;

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
			<path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
			<path d="M19 6l-7 6V2.5" />
		</svg>
	);
};

pieChart3.propTypes = propTypes;
pieChart3.defaultProps = defaultProps;

export default pieChart3;
