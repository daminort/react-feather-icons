import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const fileX = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-file-x ${className || ''}`;

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
			<path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
			<path d="M14 3v5h5M9.9 17.1L14 13M9.9 12.9L14 17" />
		</svg>
	);
};

fileX.propTypes = propTypes;
fileX.defaultProps = defaultProps;

export default fileX;
