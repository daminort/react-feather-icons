import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const play = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-play ${className || ''}`;

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
			<polygon points="5 3 19 12 5 21 5 3" />
		</svg>
	);
};

play.propTypes = propTypes;
play.defaultProps = defaultProps;

export default play;
