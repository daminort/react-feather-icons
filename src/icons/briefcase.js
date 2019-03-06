import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const briefcase = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-briefcase ${className || ''}`;

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
			<rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		</svg>
	);
};

briefcase.propTypes = propTypes;
briefcase.defaultProps = defaultProps;

export default briefcase;
