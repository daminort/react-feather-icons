import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const table = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-table ${className || ''}`;

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
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M21 12H3M12 3v18" />
		</svg>
	);
};

table.propTypes = propTypes;
table.defaultProps = defaultProps;

export default table;
