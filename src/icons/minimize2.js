import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const minimize2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-minimize-2 ${className || ''}`;

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
			<polyline points="4 14 10 14 10 20" />
			<polyline points="20 10 14 10 14 4" />
			<line x1="14" y1="10" x2="21" y2="3" />
			<line x1="3" y1="21" x2="10" y2="14" />
		</svg>
	);
};

minimize2.propTypes = propTypes;
minimize2.defaultProps = defaultProps;

export default minimize2;
