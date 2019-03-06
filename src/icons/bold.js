import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const bold = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-bold ${className || ''}`;

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
			<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
			<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
		</svg>
	);
};

bold.propTypes = propTypes;
bold.defaultProps = defaultProps;

export default bold;
