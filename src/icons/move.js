import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const move = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-move ${className || ''}`;

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
			<polyline points="5 9 2 12 5 15" />
			<polyline points="9 5 12 2 15 5" />
			<polyline points="15 19 12 22 9 19" />
			<polyline points="19 9 22 12 19 15" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<line x1="12" y1="2" x2="12" y2="22" />
		</svg>
	);
};

move.propTypes = propTypes;
move.defaultProps = defaultProps;

export default move;
