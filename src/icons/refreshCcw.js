import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const refreshCcw = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-refresh-ccw ${className || ''}`;

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
			<polyline points="1 4 1 10 7 10" />
			<polyline points="23 20 23 14 17 14" />
			<path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
		</svg>
	);
};

refreshCcw.propTypes = propTypes;
refreshCcw.defaultProps = defaultProps;

export default refreshCcw;
