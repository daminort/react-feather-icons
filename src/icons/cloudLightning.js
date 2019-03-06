import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cloudLightning = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cloud-lightning ${className || ''}`;

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
			<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
			<polyline points="13 11 9 17 15 17 11 23" />
		</svg>
	);
};

cloudLightning.propTypes = propTypes;
cloudLightning.defaultProps = defaultProps;

export default cloudLightning;
