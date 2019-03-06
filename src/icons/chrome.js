import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const chrome = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-chrome ${className || ''}`;

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
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="4" />
			<line x1="21.17" y1="8" x2="12" y2="8" />
			<line x1="3.95" y1="6.06" x2="8.54" y2="14" />
			<line x1="10.88" y1="21.94" x2="15.46" y2="14" />
		</svg>
	);
};

chrome.propTypes = propTypes;
chrome.defaultProps = defaultProps;

export default chrome;
