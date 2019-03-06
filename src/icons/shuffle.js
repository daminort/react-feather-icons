import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const shuffle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-shuffle ${className || ''}`;

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
			<polyline points="16 3 21 3 21 8" />
			<line x1="4" y1="20" x2="21" y2="3" />
			<polyline points="21 16 21 21 16 21" />
			<line x1="15" y1="15" x2="21" y2="21" />
			<line x1="4" y1="4" x2="9" y2="9" />
		</svg>
	);
};

shuffle.propTypes = propTypes;
shuffle.defaultProps = defaultProps;

export default shuffle;
