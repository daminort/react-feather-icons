import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const unlock = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-unlock ${className || ''}`;

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
			<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 9.9-1" />
		</svg>
	);
};

unlock.propTypes = propTypes;
unlock.defaultProps = defaultProps;

export default unlock;
