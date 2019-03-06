import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const speaker = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-speaker ${className || ''}`;

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
			<rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
			<circle cx="12" cy="14" r="4" />
			<line x1="12" y1="6" x2="12" y2="6" />
		</svg>
	);
};

speaker.propTypes = propTypes;
speaker.defaultProps = defaultProps;

export default speaker;
