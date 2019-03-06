import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronsDown = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevrons-down ${className || ''}`;

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
			<polyline points="7 13 12 18 17 13" />
			<polyline points="7 6 12 11 17 6" />
		</svg>
	);
};

chevronsDown.propTypes = propTypes;
chevronsDown.defaultProps = defaultProps;

export default chevronsDown;
