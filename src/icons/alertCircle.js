import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const alertCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-alert-circle ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12" y2="16" />
		</svg>
	);
};

alertCircle.propTypes = propTypes;
alertCircle.defaultProps = defaultProps;

export default alertCircle;
