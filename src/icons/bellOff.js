import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const bellOff = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bell-off ${className || ''}`;

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
			<path d="M13.73 21a2 2 0 0 1-3.46 0" />
			<path d="M18.63 13A17.89 17.89 0 0 1 18 8" />
			<path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
			<path d="M18 8a6 6 0 0 0-9.33-5" />
			<line x1="1" y1="1" x2="23" y2="23" />
		</svg>
	);
};

bellOff.propTypes = propTypes;
bellOff.defaultProps = defaultProps;

export default bellOff;
