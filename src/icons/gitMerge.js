import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const gitMerge = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-git-merge ${className || ''}`;

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
			<circle cx="18" cy="18" r="3" />
			<circle cx="6" cy="6" r="3" />
			<path d="M6 21V9a9 9 0 0 0 9 9" />
		</svg>
	);
};

gitMerge.propTypes = propTypes;
gitMerge.defaultProps = defaultProps;

export default gitMerge;
