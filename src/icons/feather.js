import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const feather = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-feather ${className || ''}`;

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
			<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
			<line x1="16" y1="8" x2="2" y2="22" />
			<line x1="17.5" y1="15" x2="9" y2="15" />
		</svg>
	);
};

feather.propTypes = propTypes;
feather.defaultProps = defaultProps;

export default feather;
