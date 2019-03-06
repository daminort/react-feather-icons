import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerLeftUp = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-left-up ${className || ''}`;

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
			<polyline points="14 9 9 4 4 9" />
			<path d="M20 20h-7a4 4 0 0 1-4-4V4" />
		</svg>
	);
};

cornerLeftUp.propTypes = propTypes;
cornerLeftUp.defaultProps = defaultProps;

export default cornerLeftUp;
