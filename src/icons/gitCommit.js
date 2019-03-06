import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const gitCommit = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-git-commit ${className || ''}`;

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
			<circle cx="12" cy="12" r="4" />
			<line x1="1.05" y1="12" x2="7" y2="12" />
			<line x1="17.01" y1="12" x2="22.96" y2="12" />
		</svg>
	);
};

gitCommit.propTypes = propTypes;
gitCommit.defaultProps = defaultProps;

export default gitCommit;
