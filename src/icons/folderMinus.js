import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const folderMinus = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-folder-minus ${className || ''}`;

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
			<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
			<line x1="9" y1="14" x2="15" y2="14" />
		</svg>
	);
};

folderMinus.propTypes = propTypes;
folderMinus.defaultProps = defaultProps;

export default folderMinus;
