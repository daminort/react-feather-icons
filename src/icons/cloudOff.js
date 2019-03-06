import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cloudOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cloud-off ${className || ''}`;

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
			<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
			<line x1="1" y1="1" x2="23" y2="23" />
		</svg>
	);
};

cloudOff.propTypes = propTypes;
cloudOff.defaultProps = defaultProps;

export default cloudOff;
