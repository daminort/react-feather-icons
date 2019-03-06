import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowDownLeft = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-down-left ${className || ''}`;

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
			<line x1="17" y1="7" x2="7" y2="17" />
			<polyline points="17 17 7 17 7 7" />
		</svg>
	);
};

arrowDownLeft.propTypes = propTypes;
arrowDownLeft.defaultProps = defaultProps;

export default arrowDownLeft;
