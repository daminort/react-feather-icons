import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const trendingDown = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-trending-down ${className || ''}`;

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
			<polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
			<polyline points="17 18 23 18 23 12" />
		</svg>
	);
};

trendingDown.propTypes = propTypes;
trendingDown.defaultProps = defaultProps;

export default trendingDown;
