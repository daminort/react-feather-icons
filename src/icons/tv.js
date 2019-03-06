import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const tv = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-tv ${className || ''}`;

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
			<rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
			<polyline points="17 2 12 7 7 2" />
		</svg>
	);
};

tv.propTypes = propTypes;
tv.defaultProps = defaultProps;

export default tv;
