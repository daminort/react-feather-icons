import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const fileMinus2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-file-minus-2 ${className || ''}`;

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
			<path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" />
			<path d="M14 3v5h5M15 18h6" />
		</svg>
	);
};

fileMinus2.propTypes = propTypes;
fileMinus2.defaultProps = defaultProps;

export default fileMinus2;
