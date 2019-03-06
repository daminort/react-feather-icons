import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const rewind = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-rewind ${className || ''}`;

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
			<polygon points="11 19 2 12 11 5 11 19" />
			<polygon points="22 19 13 12 22 5 22 19" />
		</svg>
	);
};

rewind.propTypes = propTypes;
rewind.defaultProps = defaultProps;

export default rewind;
