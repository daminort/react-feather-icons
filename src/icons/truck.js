import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const truck = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-truck ${className || ''}`;

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
			<rect x="1" y="3" width="15" height="13" />
			<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
			<circle cx="5.5" cy="18.5" r="2.5" />
			<circle cx="18.5" cy="18.5" r="2.5" />
		</svg>
	);
};

truck.propTypes = propTypes;
truck.defaultProps = defaultProps;

export default truck;
