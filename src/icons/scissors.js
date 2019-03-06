import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const scissors = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-scissors ${className || ''}`;

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
			<circle cx="6" cy="6" r="3" />
			<circle cx="6" cy="18" r="3" />
			<line x1="20" y1="4" x2="8.12" y2="15.88" />
			<line x1="14.47" y1="14.48" x2="20" y2="20" />
			<line x1="8.12" y1="8.12" x2="12" y2="12" />
		</svg>
	);
};

scissors.propTypes = propTypes;
scissors.defaultProps = defaultProps;

export default scissors;
