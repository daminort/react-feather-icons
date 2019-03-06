import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const archive = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-archive ${className || ''}`;

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
			<polyline points="21 8 21 21 3 21 3 8" />
			<rect x="1" y="3" width="22" height="5" />
			<line x1="10" y1="12" x2="14" y2="12" />
		</svg>
	);
};

archive.propTypes = propTypes;
archive.defaultProps = defaultProps;

export default archive;
