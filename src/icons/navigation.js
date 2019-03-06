import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const navigation = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-navigation ${className || ''}`;

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
			<polygon points="3 11 22 2 13 21 11 13 3 11" />
		</svg>
	);
};

navigation.propTypes = propTypes;
navigation.defaultProps = defaultProps;

export default navigation;
