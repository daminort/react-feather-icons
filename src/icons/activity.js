import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const activity = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-activity ${className || ''}`;

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
			<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
		</svg>
	);
};

activity.propTypes = propTypes;
activity.defaultProps = defaultProps;

export default activity;
