import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const layout3 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-layout-3 ${className || ''}`;

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
			<path d="M3 9h18" />
		</svg>
	);
};

layout3.propTypes = propTypes;
layout3.defaultProps = defaultProps;

export default layout3;
