import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const toggleLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-toggle-left ${className || ''}`;

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
			<rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
			<circle cx="8" cy="12" r="3" />
		</svg>
	);
};

toggleLeft.propTypes = propTypes;
toggleLeft.defaultProps = defaultProps;

export default toggleLeft;
