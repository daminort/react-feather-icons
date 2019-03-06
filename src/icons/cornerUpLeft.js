import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerUpLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-up-left ${className || ''}`;

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
			<polyline points="9 14 4 9 9 4" />
			<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
		</svg>
	);
};

cornerUpLeft.propTypes = propTypes;
cornerUpLeft.defaultProps = defaultProps;

export default cornerUpLeft;
