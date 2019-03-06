import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const skipForward = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-skip-forward ${className || ''}`;

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
			<polygon points="5 4 15 12 5 20 5 4" />
			<line x1="19" y1="5" x2="19" y2="19" />
		</svg>
	);
};

skipForward.propTypes = propTypes;
skipForward.defaultProps = defaultProps;

export default skipForward;
