import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const pauseCircle = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pause-circle ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<line x1="10" y1="15" x2="10" y2="9" />
			<line x1="14" y1="15" x2="14" y2="9" />
		</svg>
	);
};

pauseCircle.propTypes = propTypes;
pauseCircle.defaultProps = defaultProps;

export default pauseCircle;
