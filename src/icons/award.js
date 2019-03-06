import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const award = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-award ${className || ''}`;

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
			<circle cx="12" cy="8" r="7" />
			<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
		</svg>
	);
};

award.propTypes = propTypes;
award.defaultProps = defaultProps;

export default award;
