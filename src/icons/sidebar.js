import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const sidebar = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-sidebar ${className || ''}`;

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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<line x1="9" y1="3" x2="9" y2="21" />
		</svg>
	);
};

sidebar.propTypes = propTypes;
sidebar.defaultProps = defaultProps;

export default sidebar;
