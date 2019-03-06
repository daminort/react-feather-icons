import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowUpCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-up-circle ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<polyline points="16 12 12 8 8 12" />
			<line x1="12" y1="16" x2="12" y2="8" />
		</svg>
	);
};

arrowUpCircle.propTypes = propTypes;
arrowUpCircle.defaultProps = defaultProps;

export default arrowUpCircle;
