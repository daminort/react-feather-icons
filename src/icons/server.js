import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const server = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-server ${className || ''}`;

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
			<rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
			<rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
			<line x1="6" y1="6" x2="6" y2="6" />
			<line x1="6" y1="18" x2="6" y2="18" />
		</svg>
	);
};

server.propTypes = propTypes;
server.defaultProps = defaultProps;

export default server;
