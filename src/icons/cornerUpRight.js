import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerUpRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-up-right ${className || ''}`;

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
			<polyline points="15 14 20 9 15 4" />
			<path d="M4 20v-7a4 4 0 0 1 4-4h12" />
		</svg>
	);
};

cornerUpRight.propTypes = propTypes;
cornerUpRight.defaultProps = defaultProps;

export default cornerUpRight;
