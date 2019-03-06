import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerLeftDown = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-left-down ${className || ''}`;

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
			<polyline points="14 15 9 20 4 15" />
			<path d="M20 4h-7a4 4 0 0 0-4 4v12" />
		</svg>
	);
};

cornerLeftDown.propTypes = propTypes;
cornerLeftDown.defaultProps = defaultProps;

export default cornerLeftDown;
