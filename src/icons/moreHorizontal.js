import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const moreHorizontal = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-more-horizontal ${className || ''}`;

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
			<circle cx="12" cy="12" r="1" />
			<circle cx="19" cy="12" r="1" />
			<circle cx="5" cy="12" r="1" />
		</svg>
	);
};

moreHorizontal.propTypes = propTypes;
moreHorizontal.defaultProps = defaultProps;

export default moreHorizontal;
