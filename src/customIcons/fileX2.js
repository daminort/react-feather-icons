import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const fileX2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-file-x-2 ${className || ''}`;

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
			<path d="M14 3v5h5M15.88 20.12l4.24-4.24M15.88 15.88l4.24 4.24" />
		</svg>
	);
};

fileX2.propTypes = propTypes;
fileX2.defaultProps = defaultProps;

export default fileX2;
