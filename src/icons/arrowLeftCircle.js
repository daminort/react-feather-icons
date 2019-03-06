import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowLeftCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-left-circle ${className || ''}`;

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
			<polyline points="12 8 8 12 12 16" />
			<line x1="16" y1="12" x2="8" y2="12" />
		</svg>
	);
};

arrowLeftCircle.propTypes = propTypes;
arrowLeftCircle.defaultProps = defaultProps;

export default arrowLeftCircle;
