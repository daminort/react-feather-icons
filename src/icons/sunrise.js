import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const sunrise = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-sunrise ${className || ''}`;

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
			<path d="M17 18a5 5 0 0 0-10 0" />
			<line x1="12" y1="2" x2="12" y2="9" />
			<line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
			<line x1="1" y1="18" x2="3" y2="18" />
			<line x1="21" y1="18" x2="23" y2="18" />
			<line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
			<line x1="23" y1="22" x2="1" y2="22" />
			<polyline points="8 6 12 2 16 6" />
		</svg>
	);
};

sunrise.propTypes = propTypes;
sunrise.defaultProps = defaultProps;

export default sunrise;
