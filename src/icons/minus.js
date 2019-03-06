import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const minus = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-minus ${className || ''}`;

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
		</svg>
	);
};

minus.propTypes = propTypes;
minus.defaultProps = defaultProps;

export default minus;
