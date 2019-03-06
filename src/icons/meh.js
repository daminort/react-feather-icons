import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const meh = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-meh ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<line x1="8" y1="15" x2="16" y2="15" />
			<line x1="9" y1="9" x2="9.01" y2="9" />
			<line x1="15" y1="9" x2="15.01" y2="9" />
		</svg>
	);
};

meh.propTypes = propTypes;
meh.defaultProps = defaultProps;

export default meh;
