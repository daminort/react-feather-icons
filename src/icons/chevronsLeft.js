import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronsLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevrons-left ${className || ''}`;

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
			<polyline points="11 17 6 12 11 7" />
			<polyline points="18 17 13 12 18 7" />
		</svg>
	);
};

chevronsLeft.propTypes = propTypes;
chevronsLeft.defaultProps = defaultProps;

export default chevronsLeft;
