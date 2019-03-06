import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const underline = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-underline ${className || ''}`;

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
			<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
			<line x1="4" y1="21" x2="20" y2="21" />
		</svg>
	);
};

underline.propTypes = propTypes;
underline.defaultProps = defaultProps;

export default underline;
