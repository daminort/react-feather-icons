import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const cpu = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-cpu ${className || ''}`;

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
			<rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
			<rect x="9" y="9" width="6" height="6" />
			<line x1="9" y1="1" x2="9" y2="4" />
			<line x1="15" y1="1" x2="15" y2="4" />
			<line x1="9" y1="20" x2="9" y2="23" />
			<line x1="15" y1="20" x2="15" y2="23" />
			<line x1="20" y1="9" x2="23" y2="9" />
			<line x1="20" y1="14" x2="23" y2="14" />
			<line x1="1" y1="9" x2="4" y2="9" />
			<line x1="1" y1="14" x2="4" y2="14" />
		</svg>
	);
};

cpu.propTypes = propTypes;
cpu.defaultProps = defaultProps;

export default cpu;
