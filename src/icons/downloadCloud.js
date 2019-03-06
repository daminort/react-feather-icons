import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const downloadCloud = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-download-cloud ${className || ''}`;

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
			<polyline points="8 17 12 21 16 17" />
			<line x1="12" y1="12" x2="12" y2="21" />
			<path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
		</svg>
	);
};

downloadCloud.propTypes = propTypes;
downloadCloud.defaultProps = defaultProps;

export default downloadCloud;
