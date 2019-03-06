import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const percent = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-percent ${className || ''}`;

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
			<line x1="19" y1="5" x2="5" y2="19" />
			<circle cx="6.5" cy="6.5" r="2.5" />
			<circle cx="17.5" cy="17.5" r="2.5" />
		</svg>
	);
};

percent.propTypes = propTypes;
percent.defaultProps = defaultProps;

export default percent;
