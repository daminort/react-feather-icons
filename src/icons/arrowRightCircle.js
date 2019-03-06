import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowRightCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-right-circle ${className || ''}`;

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
			<polyline points="12 16 16 12 12 8" />
			<line x1="8" y1="12" x2="16" y2="12" />
		</svg>
	);
};

arrowRightCircle.propTypes = propTypes;
arrowRightCircle.defaultProps = defaultProps;

export default arrowRightCircle;
