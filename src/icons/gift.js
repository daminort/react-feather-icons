import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const gift = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-gift ${className || ''}`;

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
			<polyline points="20 12 20 22 4 22 4 12" />
			<rect x="2" y="7" width="20" height="5" />
			<line x1="12" y1="22" x2="12" y2="7" />
			<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
			<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
		</svg>
	);
};

gift.propTypes = propTypes;
gift.defaultProps = defaultProps;

export default gift;
