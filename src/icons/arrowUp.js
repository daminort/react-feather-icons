import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const arrowUp = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-arrow-up ${className || ''}`;

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
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
		</svg>
	);
};

arrowUp.propTypes = propTypes;
arrowUp.defaultProps = defaultProps;

export default arrowUp;
