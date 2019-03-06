import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cornerDownRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-corner-down-right ${className || ''}`;

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
			<polyline points="15 10 20 15 15 20" />
			<path d="M4 4v7a4 4 0 0 0 4 4h12" />
		</svg>
	);
};

cornerDownRight.propTypes = propTypes;
cornerDownRight.defaultProps = defaultProps;

export default cornerDownRight;
