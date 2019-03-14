import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const layout5 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-layout-5 ${className || ''}`;

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
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M15 3v18" />
		</svg>
	);
};

layout5.propTypes = propTypes;
layout5.defaultProps = defaultProps;

export default layout5;
