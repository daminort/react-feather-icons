import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronsRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevrons-right ${className || ''}`;

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
			<polyline points="13 17 18 12 13 7" />
			<polyline points="6 17 11 12 6 7" />
		</svg>
	);
};

chevronsRight.propTypes = propTypes;
chevronsRight.defaultProps = defaultProps;

export default chevronsRight;
