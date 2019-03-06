import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowDownRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-down-right ${className || ''}`;

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
			<line x1="7" y1="7" x2="17" y2="17" />
			<polyline points="17 7 17 17 7 17" />
		</svg>
	);
};

arrowDownRight.propTypes = propTypes;
arrowDownRight.defaultProps = defaultProps;

export default arrowDownRight;
