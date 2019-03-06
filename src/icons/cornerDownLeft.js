import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerDownLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-down-left ${className || ''}`;

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
			<polyline points="9 10 4 15 9 20" />
			<path d="M20 4v7a4 4 0 0 1-4 4H4" />
		</svg>
	);
};

cornerDownLeft.propTypes = propTypes;
cornerDownLeft.defaultProps = defaultProps;

export default cornerDownLeft;
