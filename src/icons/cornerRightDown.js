import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerRightDown = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-right-down ${className || ''}`;

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
			<polyline points="10 15 15 20 20 15" />
			<path d="M4 4h7a4 4 0 0 1 4 4v12" />
		</svg>
	);
};

cornerRightDown.propTypes = propTypes;
cornerRightDown.defaultProps = defaultProps;

export default cornerRightDown;
