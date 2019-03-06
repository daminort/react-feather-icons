import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const crop = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-crop ${className || ''}`;

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
			<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
			<path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
		</svg>
	);
};

crop.propTypes = propTypes;
crop.defaultProps = defaultProps;

export default crop;
