import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const minusCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-minus-circle ${className || ''}`;

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
			<line x1="8" y1="12" x2="16" y2="12" />
		</svg>
	);
};

minusCircle.propTypes = propTypes;
minusCircle.defaultProps = defaultProps;

export default minusCircle;
