import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowDownCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-down-circle ${className || ''}`;

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
			<polyline points="8 12 12 16 16 12" />
			<line x1="12" y1="8" x2="12" y2="16" />
		</svg>
	);
};

arrowDownCircle.propTypes = propTypes;
arrowDownCircle.defaultProps = defaultProps;

export default arrowDownCircle;
