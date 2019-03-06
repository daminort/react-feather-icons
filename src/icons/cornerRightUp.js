import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerRightUp = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-right-up ${className || ''}`;

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
			<polyline points="10 9 15 4 20 9" />
			<path d="M4 20h7a4 4 0 0 0 4-4V4" />
		</svg>
	);
};

cornerRightUp.propTypes = propTypes;
cornerRightUp.defaultProps = defaultProps;

export default cornerRightUp;
