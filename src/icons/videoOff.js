import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const videoOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-video-off ${className || ''}`;

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
			<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
			<line x1="1" y1="1" x2="23" y2="23" />
		</svg>
	);
};

videoOff.propTypes = propTypes;
videoOff.defaultProps = defaultProps;

export default videoOff;
