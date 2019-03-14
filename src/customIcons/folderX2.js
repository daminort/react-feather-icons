import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const folderX2 = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-folder-x-2 ${className || ''}`;

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
			<path d="M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2M21.12 15.88l-4.24 4.24M16.88 15.88l4.24 4.24" />
		</svg>
	);
};

folderX2.propTypes = propTypes;
folderX2.defaultProps = defaultProps;

export default folderX2;
