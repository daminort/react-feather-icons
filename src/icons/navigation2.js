import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const navigation2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-navigation-2 ${className || ''}`;

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
			<polygon points="12 2 19 21 12 17 5 21 12 2" />
		</svg>
	);
};

navigation2.propTypes = propTypes;
navigation2.defaultProps = defaultProps;

export default navigation2;
