import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const rotateCcw = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-rotate-ccw ${className || ''}`;

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
			<polyline points="1 4 1 10 7 10" />
			<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
		</svg>
	);
};

rotateCcw.propTypes = propTypes;
rotateCcw.defaultProps = defaultProps;

export default rotateCcw;
