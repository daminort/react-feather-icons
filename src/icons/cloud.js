import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cloud = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cloud ${className || ''}`;

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
			<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
		</svg>
	);
};

cloud.propTypes = propTypes;
cloud.defaultProps = defaultProps;

export default cloud;
