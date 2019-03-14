import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const layout2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-layout-2 ${className || ''}`;

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
			<path d="M3 9h18M15 21V9" />
		</svg>
	);
};

layout2.propTypes = propTypes;
layout2.defaultProps = defaultProps;

export default layout2;
