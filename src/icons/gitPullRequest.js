import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const gitPullRequest = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-git-pull-request ${className || ''}`;

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
			<path d="M13 6h3a2 2 0 0 1 2 2v7" />
			<line x1="6" y1="9" x2="6" y2="21" />
		</svg>
	);
};

gitPullRequest.propTypes = propTypes;
gitPullRequest.defaultProps = defaultProps;

export default gitPullRequest;
