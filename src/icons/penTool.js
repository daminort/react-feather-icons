import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const penTool = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-pen-tool ${className || ''}`;

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
			<path d="M12 19l7-7 3 3-7 7-3-3z" />
			<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
			<path d="M2 2l7.586 7.586" />
			<circle cx="11" cy="11" r="2" />
		</svg>
	);
};

penTool.propTypes = propTypes;
penTool.defaultProps = defaultProps;

export default penTool;
