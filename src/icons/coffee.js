import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const coffee = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-coffee ${className || ''}`;

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
			<path d="M18 8h1a4 4 0 0 1 0 8h-1" />
			<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
			<line x1="6" y1="1" x2="6" y2="4" />
			<line x1="10" y1="1" x2="10" y2="4" />
			<line x1="14" y1="1" x2="14" y2="4" />
		</svg>
	);
};

coffee.propTypes = propTypes;
coffee.defaultProps = defaultProps;

export default coffee;
