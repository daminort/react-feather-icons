import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cloudSnow = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cloud-snow ${className || ''}`;

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
			<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
			<line x1="8" y1="16" x2="8" y2="16" />
			<line x1="8" y1="20" x2="8" y2="20" />
			<line x1="12" y1="18" x2="12" y2="18" />
			<line x1="12" y1="22" x2="12" y2="22" />
			<line x1="16" y1="16" x2="16" y2="16" />
			<line x1="16" y1="20" x2="16" y2="20" />
		</svg>
	);
};

cloudSnow.propTypes = propTypes;
cloudSnow.defaultProps = defaultProps;

export default cloudSnow;
