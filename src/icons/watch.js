import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const watch = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-watch ${className || ''}`;

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
			<circle cx="12" cy="12" r="7" />
			<polyline points="12 9 12 12 13.5 13.5" />
			<path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
		</svg>
	);
};

watch.propTypes = propTypes;
watch.defaultProps = defaultProps;

export default watch;
