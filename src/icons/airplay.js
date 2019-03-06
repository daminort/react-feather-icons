import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const airplay = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-airplay ${className || ''}`;

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
			<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
			<polygon points="12 15 17 21 7 21 12 15" />
		</svg>
	);
};

airplay.propTypes = propTypes;
airplay.defaultProps = defaultProps;

export default airplay;
