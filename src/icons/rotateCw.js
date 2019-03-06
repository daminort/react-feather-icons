import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const rotateCw = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-rotate-cw ${className || ''}`;

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
			<polyline points="23 4 23 10 17 10" />
			<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
		</svg>
	);
};

rotateCw.propTypes = propTypes;
rotateCw.defaultProps = defaultProps;

export default rotateCw;
