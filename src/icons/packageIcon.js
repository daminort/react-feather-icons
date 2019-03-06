import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const packageIcon = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-packageIcon ${className || ''}`;

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
			<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
			<polyline points="2.32 6.16 12 11 21.68 6.16" />
			<line x1="12" y1="22.76" x2="12" y2="11" />
			<line x1="7" y1="3.5" x2="17" y2="8.5" />
		</svg>
	);
};

packageIcon.propTypes = propTypes;
packageIcon.defaultProps = defaultProps;

export default packageIcon;
