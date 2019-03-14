import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const expand = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-expand ${className || ''}`;

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
			<path d="M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6" />
		</svg>
	);
};

expand.propTypes = propTypes;
expand.defaultProps = defaultProps;

export default expand;
