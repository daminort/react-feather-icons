import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const fileMinus = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-file-minus ${className || ''}`;

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
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="9" y1="15" x2="15" y2="15" />
		</svg>
	);
};

fileMinus.propTypes = propTypes;
fileMinus.defaultProps = defaultProps;

export default fileMinus;
