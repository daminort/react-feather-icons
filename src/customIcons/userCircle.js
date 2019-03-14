import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const userCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-user-сircle ${className || ''}`;

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
			<path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
			<circle cx="12" cy="10" r="3" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	);
};

userCircle.propTypes = propTypes;
userCircle.defaultProps = defaultProps;

export default userCircle;
