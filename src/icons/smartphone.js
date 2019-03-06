import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const smartphone = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-smartphone ${className || ''}`;

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
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" y1="18" x2="12" y2="18" />
		</svg>
	);
};

smartphone.propTypes = propTypes;
smartphone.defaultProps = defaultProps;

export default smartphone;
