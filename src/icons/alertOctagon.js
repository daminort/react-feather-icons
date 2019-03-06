import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const alertOctagon = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-alert-octagon ${className || ''}`;

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
			<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12" y2="16" />
		</svg>
	);
};

alertOctagon.propTypes = propTypes;
alertOctagon.defaultProps = defaultProps;

export default alertOctagon;
