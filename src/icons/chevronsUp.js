import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronsUp = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevrons-up ${className || ''}`;

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
			<polyline points="17 11 12 6 7 11" />
			<polyline points="17 18 12 13 7 18" />
		</svg>
	);
};

chevronsUp.propTypes = propTypes;
chevronsUp.defaultProps = defaultProps;

export default chevronsUp;
