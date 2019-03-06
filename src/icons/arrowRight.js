import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-right ${className || ''}`;

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
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	);
};

arrowRight.propTypes = propTypes;
arrowRight.defaultProps = defaultProps;

export default arrowRight;
