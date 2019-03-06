import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowUpLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-up-left ${className || ''}`;

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
			<line x1="17" y1="17" x2="7" y2="7" />
			<polyline points="7 17 7 7 17 7" />
		</svg>
	);
};

arrowUpLeft.propTypes = propTypes;
arrowUpLeft.defaultProps = defaultProps;

export default arrowUpLeft;
