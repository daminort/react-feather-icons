import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const volume = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-volume ${className || ''}`;

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
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		</svg>
	);
};

volume.propTypes = propTypes;
volume.defaultProps = defaultProps;

export default volume;
