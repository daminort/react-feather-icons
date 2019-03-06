import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const alignRight = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-align-right ${className || ''}`;

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
			<line x1="21" y1="10" x2="7" y2="10" />
			<line x1="21" y1="6" x2="3" y2="6" />
			<line x1="21" y1="14" x2="3" y2="14" />
			<line x1="21" y1="18" x2="7" y2="18" />
		</svg>
	);
};

alignRight.propTypes = propTypes;
alignRight.defaultProps = defaultProps;

export default alignRight;
