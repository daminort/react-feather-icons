import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const strikethrough = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-strikethrough ${className || ''}`;

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
			<path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 3.6 3.9h.2m8.2 3.7c.3.4.4.8.4 1.3 0 2.9-2.7 3.6-6.2 3.6-2.3 0-4.4-.3-6.2-.9M4 11.5h16" />
		</svg>
	);
};

strikethrough.propTypes = propTypes;
strikethrough.defaultProps = defaultProps;

export default strikethrough;
