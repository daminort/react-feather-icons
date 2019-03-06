import React from 'react';
import {propTypes, defaultProps, svgProps} from '../config/props';

const voicemail = props => {
	const {size, color, thickness, ends, joins, className, ...restProps} = props;
	const iconClassName = `feather feather-voicemail ${className || ''}`;

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
			<circle cx="5.5" cy="11.5" r="4.5" />
			<circle cx="18.5" cy="11.5" r="4.5" />
			<line x1="5.5" y1="16" x2="18.5" y2="16" />
		</svg>
	);
};

voicemail.propTypes = propTypes;
voicemail.defaultProps = defaultProps;

export default voicemail;
