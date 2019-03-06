import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const video = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-video ${className || ''}`;

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
			<polygon points="23 7 16 12 23 17 23 7" />
			<rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
		</svg>
	);
};

video.propTypes = propTypes;
video.defaultProps = defaultProps;

export default video;
