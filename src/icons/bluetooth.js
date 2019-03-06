import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const bluetooth = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bluetooth ${className || ''}`;

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
			<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
		</svg>
	);
};

bluetooth.propTypes = propTypes;
bluetooth.defaultProps = defaultProps;

export default bluetooth;
