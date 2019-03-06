import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const remove = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-remove ${className || ''}`;

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
			<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
			<line x1="18" y1="9" x2="12" y2="15" />
			<line x1="12" y1="9" x2="18" y2="15" />
		</svg>
	);
};

remove.propTypes = propTypes;
remove.defaultProps = defaultProps;

export default remove;
