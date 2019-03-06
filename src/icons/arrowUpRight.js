import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowUpRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-up-right ${className || ''}`;

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
			<line x1="7" y1="17" x2="17" y2="7" />
			<polyline points="7 7 17 7 17 17" />
		</svg>
	);
};

arrowUpRight.propTypes = propTypes;
arrowUpRight.defaultProps = defaultProps;

export default arrowUpRight;
