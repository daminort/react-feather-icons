import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const toggleRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-toggle-right ${className || ''}`;

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
			<circle cx="16" cy="12" r="3" />
		</svg>
	);
};

toggleRight.propTypes = propTypes;
toggleRight.defaultProps = defaultProps;

export default toggleRight;
