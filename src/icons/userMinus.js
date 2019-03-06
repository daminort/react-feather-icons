import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const userMinus = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-user-minus ${className || ''}`;

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
			<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="8.5" cy="7" r="4" />
			<line x1="23" y1="11" x2="17" y2="11" />
		</svg>
	);
};

userMinus.propTypes = propTypes;
userMinus.defaultProps = defaultProps;

export default userMinus;
