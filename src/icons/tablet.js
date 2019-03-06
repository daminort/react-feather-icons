import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const tablet = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-tablet ${className || ''}`;

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
			<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)" />
			<line x1="12" y1="18" x2="12" y2="18" />
		</svg>
	);
};

tablet.propTypes = propTypes;
tablet.defaultProps = defaultProps;

export default tablet;
