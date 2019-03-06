import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pocket = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pocket ${className || ''}`;

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
			<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
			<polyline points="8 10 12 14 16 10" />
		</svg>
	);
};

pocket.propTypes = propTypes;
pocket.defaultProps = defaultProps;

export default pocket;
