import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const skipBack = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-skip-back ${className || ''}`;

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
			<polygon points="19 20 9 12 19 4 19 20" />
			<line x1="5" y1="19" x2="5" y2="5" />
		</svg>
	);
};

skipBack.propTypes = propTypes;
skipBack.defaultProps = defaultProps;

export default skipBack;
