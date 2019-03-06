import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const fastForward = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-fast-forward ${className || ''}`;

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
			<polygon points="13 19 22 12 13 5 13 19" />
			<polygon points="2 19 11 12 2 5 2 19" />
		</svg>
	);
};

fastForward.propTypes = propTypes;
fastForward.defaultProps = defaultProps;

export default fastForward;
