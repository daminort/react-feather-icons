import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const layout4 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-layout-4 ${className || ''}`;

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
			<path d="M3 15h18" />
		</svg>
	);
};

layout4.propTypes = propTypes;
layout4.defaultProps = defaultProps;

export default layout4;
