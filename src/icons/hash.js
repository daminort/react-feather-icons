import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const hash = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-hash ${className || ''}`;

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
			<line x1="4" y1="9" x2="20" y2="9" />
			<line x1="4" y1="15" x2="20" y2="15" />
			<line x1="10" y1="3" x2="8" y2="21" />
			<line x1="16" y1="3" x2="14" y2="21" />
		</svg>
	);
};

hash.propTypes = propTypes;
hash.defaultProps = defaultProps;

export default hash;
