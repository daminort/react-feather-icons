import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const stopCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-stop-circle ${className || ''}`;

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
			<rect x="9" y="9" width="6" height="6" />
		</svg>
	);
};

stopCircle.propTypes = propTypes;
stopCircle.defaultProps = defaultProps;

export default stopCircle;
