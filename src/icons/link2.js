import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const link2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-link-2 ${className || ''}`;

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
			<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
			<line x1="8" y1="12" x2="16" y2="12" />
		</svg>
	);
};

link2.propTypes = propTypes;
link2.defaultProps = defaultProps;

export default link2;
