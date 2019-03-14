import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const folderX = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-folder-x ${className || ''}`;

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
			<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v11zM9.9 16.1L14 12M9.9 11.9L14 16" />
		</svg>
	);
};

folderX.propTypes = propTypes;
folderX.defaultProps = defaultProps;

export default folderX;
