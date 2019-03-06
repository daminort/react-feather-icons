import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chevronUp = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chevron-up ${className || ''}`;

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
			<polyline points="18 15 12 9 6 15" />
		</svg>
	);
};

chevronUp.propTypes = propTypes;
chevronUp.defaultProps = defaultProps;

export default chevronUp;
