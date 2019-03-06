import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const trello = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-trello ${className || ''}`;

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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<rect x="7" y="7" width="3" height="9" />
			<rect x="14" y="7" width="3" height="5" />
		</svg>
	);
};

trello.propTypes = propTypes;
trello.defaultProps = defaultProps;

export default trello;
