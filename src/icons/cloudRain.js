import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cloudRain = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cloud-rain ${className || ''}`;

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
			<line x1="16" y1="13" x2="16" y2="21" />
			<line x1="8" y1="13" x2="8" y2="21" />
			<line x1="12" y1="15" x2="12" y2="23" />
			<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
		</svg>
	);
};

cloudRain.propTypes = propTypes;
cloudRain.defaultProps = defaultProps;

export default cloudRain;
