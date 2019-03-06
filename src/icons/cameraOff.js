import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cameraOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-camera-off ${className || ''}`;

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
			<line x1="1" y1="1" x2="23" y2="23" />
			<path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
		</svg>
	);
};

cameraOff.propTypes = propTypes;
cameraOff.defaultProps = defaultProps;

export default cameraOff;
