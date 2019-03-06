import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const list = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-list ${className || ''}`;

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
			<line x1="8" y1="6" x2="21" y2="6" />
			<line x1="8" y1="12" x2="21" y2="12" />
			<line x1="8" y1="18" x2="21" y2="18" />
			<line x1="3" y1="6" x2="3" y2="6" />
			<line x1="3" y1="12" x2="3" y2="12" />
			<line x1="3" y1="18" x2="3" y2="18" />
		</svg>
	);
};

list.propTypes = propTypes;
list.defaultProps = defaultProps;

export default list;
