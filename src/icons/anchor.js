import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const anchor = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-anchor ${className || ''}`;

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
			<circle cx="12" cy="5" r="3" />
			<line x1="12" y1="22" x2="12" y2="8" />
			<path d="M5 12H2a10 10 0 0 0 20 0h-3" />
		</svg>
	);
};

anchor.propTypes = propTypes;
anchor.defaultProps = defaultProps;

export default anchor;
