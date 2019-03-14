import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const table2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-table-2 ${className || ''}`;

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
			<path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" />
		</svg>
	);
};

table2.propTypes = propTypes;
table2.defaultProps = defaultProps;

export default table2;
