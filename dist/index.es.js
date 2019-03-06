import PropTypes from 'prop-types';
import React from 'react';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

// Icons props
var propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ends: PropTypes.oneOf(['butt', 'round', 'square']),
  joins: PropTypes.oneOf(['bevel', 'round', 'arcs']),
  className: PropTypes.string
};

var defaultProps = {
  size: 24,
  color: 'currentColor',
  thickness: 2,
  ends: 'round',
  joins: 'round',
  className: null
};

// Container props
var containerPropTypes = _extends({}, propTypes, {
  name: PropTypes.string.isRequired
});

// Common SVG props
var svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none'
};

var activity = function activity(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-activity ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })
	);
};

activity.propTypes = propTypes;
activity.defaultProps = defaultProps;

var airplay = function airplay(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-airplay ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1' }),
		React.createElement('polygon', { points: '12 15 17 21 7 21 12 15' })
	);
};

airplay.propTypes = propTypes;
airplay.defaultProps = defaultProps;

var alertCircle = function alertCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-alert-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '16' })
	);
};

alertCircle.propTypes = propTypes;
alertCircle.defaultProps = defaultProps;

var alertOctagon = function alertOctagon(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-alert-octagon ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '16' })
	);
};

alertOctagon.propTypes = propTypes;
alertOctagon.defaultProps = defaultProps;

var alertTriangle = function alertTriangle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-alert-triangle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
		React.createElement('line', { x1: '12', y1: '9', x2: '12', y2: '13' }),
		React.createElement('line', { x1: '12', y1: '17', x2: '12', y2: '17' })
	);
};

alertTriangle.propTypes = propTypes;
alertTriangle.defaultProps = defaultProps;

var alignCenter = function alignCenter(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-align-center ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '18', y1: '10', x2: '6', y2: '10' }),
		React.createElement('line', { x1: '21', y1: '6', x2: '3', y2: '6' }),
		React.createElement('line', { x1: '21', y1: '14', x2: '3', y2: '14' }),
		React.createElement('line', { x1: '18', y1: '18', x2: '6', y2: '18' })
	);
};

alignCenter.propTypes = propTypes;
alignCenter.defaultProps = defaultProps;

var alignJustify = function alignJustify(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-align-justify ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '21', y1: '10', x2: '3', y2: '10' }),
		React.createElement('line', { x1: '21', y1: '6', x2: '3', y2: '6' }),
		React.createElement('line', { x1: '21', y1: '14', x2: '3', y2: '14' }),
		React.createElement('line', { x1: '21', y1: '18', x2: '3', y2: '18' })
	);
};

alignJustify.propTypes = propTypes;
alignJustify.defaultProps = defaultProps;

var alignLeft = function alignLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-align-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '17', y1: '10', x2: '3', y2: '10' }),
		React.createElement('line', { x1: '21', y1: '6', x2: '3', y2: '6' }),
		React.createElement('line', { x1: '21', y1: '14', x2: '3', y2: '14' }),
		React.createElement('line', { x1: '17', y1: '18', x2: '3', y2: '18' })
	);
};

alignLeft.propTypes = propTypes;
alignLeft.defaultProps = defaultProps;

var alignRight = function alignRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-align-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '21', y1: '10', x2: '7', y2: '10' }),
		React.createElement('line', { x1: '21', y1: '6', x2: '3', y2: '6' }),
		React.createElement('line', { x1: '21', y1: '14', x2: '3', y2: '14' }),
		React.createElement('line', { x1: '21', y1: '18', x2: '7', y2: '18' })
	);
};

alignRight.propTypes = propTypes;
alignRight.defaultProps = defaultProps;

var anchor = function anchor(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-anchor ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '5', r: '3' }),
		React.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '8' }),
		React.createElement('path', { d: 'M5 12H2a10 10 0 0 0 20 0h-3' })
	);
};

anchor.propTypes = propTypes;
anchor.defaultProps = defaultProps;

var aperture = function aperture(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-aperture ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '14.31', y1: '8', x2: '20.05', y2: '17.94' }),
		React.createElement('line', { x1: '9.69', y1: '8', x2: '21.17', y2: '8' }),
		React.createElement('line', { x1: '7.38', y1: '12', x2: '13.12', y2: '2.06' }),
		React.createElement('line', { x1: '9.69', y1: '16', x2: '3.95', y2: '6.06' }),
		React.createElement('line', { x1: '14.31', y1: '16', x2: '2.83', y2: '16' }),
		React.createElement('line', { x1: '16.62', y1: '12', x2: '10.88', y2: '21.94' })
	);
};

aperture.propTypes = propTypes;
aperture.defaultProps = defaultProps;

var archive = function archive(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-archive ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '21 8 21 21 3 21 3 8' }),
		React.createElement('rect', { x: '1', y: '3', width: '22', height: '5' }),
		React.createElement('line', { x1: '10', y1: '12', x2: '14', y2: '12' })
	);
};

archive.propTypes = propTypes;
archive.defaultProps = defaultProps;

var arrowDownCircle = function arrowDownCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-down-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polyline', { points: '8 12 12 16 16 12' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '16' })
	);
};

arrowDownCircle.propTypes = propTypes;
arrowDownCircle.defaultProps = defaultProps;

var arrowDownLeft = function arrowDownLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-down-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '17', y1: '7', x2: '7', y2: '17' }),
		React.createElement('polyline', { points: '17 17 7 17 7 7' })
	);
};

arrowDownLeft.propTypes = propTypes;
arrowDownLeft.defaultProps = defaultProps;

var arrowDownRight = function arrowDownRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-down-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '7', y1: '7', x2: '17', y2: '17' }),
		React.createElement('polyline', { points: '17 7 17 17 7 17' })
	);
};

arrowDownRight.propTypes = propTypes;
arrowDownRight.defaultProps = defaultProps;

var arrowDown = function arrowDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
		React.createElement('polyline', { points: '19 12 12 19 5 12' })
	);
};

arrowDown.propTypes = propTypes;
arrowDown.defaultProps = defaultProps;

var arrowLeftCircle = function arrowLeftCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-left-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polyline', { points: '12 8 8 12 12 16' }),
		React.createElement('line', { x1: '16', y1: '12', x2: '8', y2: '12' })
	);
};

arrowLeftCircle.propTypes = propTypes;
arrowLeftCircle.defaultProps = defaultProps;

var arrowLeft = function arrowLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '19', y1: '12', x2: '5', y2: '12' }),
		React.createElement('polyline', { points: '12 19 5 12 12 5' })
	);
};

arrowLeft.propTypes = propTypes;
arrowLeft.defaultProps = defaultProps;

var arrowRightCircle = function arrowRightCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-right-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polyline', { points: '12 16 16 12 12 8' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

arrowRightCircle.propTypes = propTypes;
arrowRightCircle.defaultProps = defaultProps;

var arrowRight = function arrowRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
		React.createElement('polyline', { points: '12 5 19 12 12 19' })
	);
};

arrowRight.propTypes = propTypes;
arrowRight.defaultProps = defaultProps;

var arrowUpCircle = function arrowUpCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-up-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polyline', { points: '16 12 12 8 8 12' }),
		React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '8' })
	);
};

arrowUpCircle.propTypes = propTypes;
arrowUpCircle.defaultProps = defaultProps;

var arrowUpLeft = function arrowUpLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-up-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '17', y1: '17', x2: '7', y2: '7' }),
		React.createElement('polyline', { points: '7 17 7 7 17 7' })
	);
};

arrowUpLeft.propTypes = propTypes;
arrowUpLeft.defaultProps = defaultProps;

var arrowUpRight = function arrowUpRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-up-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '7', y1: '17', x2: '17', y2: '7' }),
		React.createElement('polyline', { points: '7 7 17 7 17 17' })
	);
};

arrowUpRight.propTypes = propTypes;
arrowUpRight.defaultProps = defaultProps;

var arrowUp = function arrowUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-arrow-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '19', x2: '12', y2: '5' }),
		React.createElement('polyline', { points: '5 12 12 5 19 12' })
	);
};

arrowUp.propTypes = propTypes;
arrowUp.defaultProps = defaultProps;

var atSign = function atSign(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-at-sign ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '4' }),
		React.createElement('path', { d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94' })
	);
};

atSign.propTypes = propTypes;
atSign.defaultProps = defaultProps;

var award = function award(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-award ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '8', r: '7' }),
		React.createElement('polyline', { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' })
	);
};

award.propTypes = propTypes;
award.defaultProps = defaultProps;

var barChart2 = function barChart2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bar-chart-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '18', y1: '20', x2: '18', y2: '10' }),
		React.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '4' }),
		React.createElement('line', { x1: '6', y1: '20', x2: '6', y2: '14' })
	);
};

barChart2.propTypes = propTypes;
barChart2.defaultProps = defaultProps;

var barChart = function barChart(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bar-chart ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '10' }),
		React.createElement('line', { x1: '18', y1: '20', x2: '18', y2: '4' }),
		React.createElement('line', { x1: '6', y1: '20', x2: '6', y2: '16' })
	);
};

barChart.propTypes = propTypes;
barChart.defaultProps = defaultProps;

var batteryCharging = function batteryCharging(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-battery-charging ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19' }),
		React.createElement('line', { x1: '23', y1: '13', x2: '23', y2: '11' }),
		React.createElement('polyline', { points: '11 6 7 12 13 12 9 18' })
	);
};

batteryCharging.propTypes = propTypes;
batteryCharging.defaultProps = defaultProps;

var battery = function battery(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-battery ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '1', y: '6', width: '18', height: '12', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '23', y1: '13', x2: '23', y2: '11' })
	);
};

battery.propTypes = propTypes;
battery.defaultProps = defaultProps;

var bellOff = function bellOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bell-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' }),
		React.createElement('path', { d: 'M18.63 13A17.89 17.89 0 0 1 18 8' }),
		React.createElement('path', { d: 'M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14' }),
		React.createElement('path', { d: 'M18 8a6 6 0 0 0-9.33-5' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

bellOff.propTypes = propTypes;
bellOff.defaultProps = defaultProps;

var bell = function bell(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bell ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' }),
		React.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' })
	);
};

bell.propTypes = propTypes;
bell.defaultProps = defaultProps;

var bluetooth = function bluetooth(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bluetooth ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5' })
	);
};

bluetooth.propTypes = propTypes;
bluetooth.defaultProps = defaultProps;

var bold = function bold(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bold ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z' }),
		React.createElement('path', { d: 'M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z' })
	);
};

bold.propTypes = propTypes;
bold.defaultProps = defaultProps;

var bookOpen = function bookOpen(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-book-open ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
		React.createElement('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
	);
};

bookOpen.propTypes = propTypes;
bookOpen.defaultProps = defaultProps;

var book = function book(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-book ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' }),
		React.createElement('path', { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' })
	);
};

book.propTypes = propTypes;
book.defaultProps = defaultProps;

var bookmark = function bookmark(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-bookmark ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' })
	);
};

bookmark.propTypes = propTypes;
bookmark.defaultProps = defaultProps;

var box = function box(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-box ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z' }),
		React.createElement('polyline', { points: '2.32 6.16 12 11 21.68 6.16' }),
		React.createElement('line', { x1: '12', y1: '22.76', x2: '12', y2: '11' })
	);
};

box.propTypes = propTypes;
box.defaultProps = defaultProps;

var briefcase = function briefcase(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-briefcase ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '7', width: '20', height: '14', rx: '2', ry: '2' }),
		React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
	);
};

briefcase.propTypes = propTypes;
briefcase.defaultProps = defaultProps;

var calendar = function calendar(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-calendar ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
		React.createElement('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
		React.createElement('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
	);
};

calendar.propTypes = propTypes;
calendar.defaultProps = defaultProps;

var cameraOff = function cameraOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-camera-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' }),
		React.createElement('path', { d: 'M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56' })
	);
};

cameraOff.propTypes = propTypes;
cameraOff.defaultProps = defaultProps;

var camera = function camera(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-camera ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' }),
		React.createElement('circle', { cx: '12', cy: '13', r: '4' })
	);
};

camera.propTypes = propTypes;
camera.defaultProps = defaultProps;

var cast = function cast(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cast ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6' }),
		React.createElement('line', { x1: '2', y1: '20', x2: '2', y2: '20' })
	);
};

cast.propTypes = propTypes;
cast.defaultProps = defaultProps;

var checkCircle = function checkCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-check-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
		React.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
	);
};

checkCircle.propTypes = propTypes;
checkCircle.defaultProps = defaultProps;

var checkSquare = function checkSquare(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-check-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '9 11 12 14 22 4' }),
		React.createElement('path', { d: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' })
	);
};

checkSquare.propTypes = propTypes;
checkSquare.defaultProps = defaultProps;

var check = function check(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-check ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '20 6 9 17 4 12' })
	);
};

check.propTypes = propTypes;
check.defaultProps = defaultProps;

var chevronDown = function chevronDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevron-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '6 9 12 15 18 9' })
	);
};

chevronDown.propTypes = propTypes;
chevronDown.defaultProps = defaultProps;

var chevronLeft = function chevronLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevron-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '15 18 9 12 15 6' })
	);
};

chevronLeft.propTypes = propTypes;
chevronLeft.defaultProps = defaultProps;

var chevronRight = function chevronRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevron-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '9 18 15 12 9 6' })
	);
};

chevronRight.propTypes = propTypes;
chevronRight.defaultProps = defaultProps;

var chevronUp = function chevronUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevron-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '18 15 12 9 6 15' })
	);
};

chevronUp.propTypes = propTypes;
chevronUp.defaultProps = defaultProps;

var chevronsDown = function chevronsDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevrons-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '7 13 12 18 17 13' }),
		React.createElement('polyline', { points: '7 6 12 11 17 6' })
	);
};

chevronsDown.propTypes = propTypes;
chevronsDown.defaultProps = defaultProps;

var chevronsLeft = function chevronsLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevrons-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '11 17 6 12 11 7' }),
		React.createElement('polyline', { points: '18 17 13 12 18 7' })
	);
};

chevronsLeft.propTypes = propTypes;
chevronsLeft.defaultProps = defaultProps;

var chevronsRight = function chevronsRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevrons-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '13 17 18 12 13 7' }),
		React.createElement('polyline', { points: '6 17 11 12 6 7' })
	);
};

chevronsRight.propTypes = propTypes;
chevronsRight.defaultProps = defaultProps;

var chevronsUp = function chevronsUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chevrons-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '17 11 12 6 7 11' }),
		React.createElement('polyline', { points: '17 18 12 13 7 18' })
	);
};

chevronsUp.propTypes = propTypes;
chevronsUp.defaultProps = defaultProps;

var chrome = function chrome(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-chrome ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '4' }),
		React.createElement('line', { x1: '21.17', y1: '8', x2: '12', y2: '8' }),
		React.createElement('line', { x1: '3.95', y1: '6.06', x2: '8.54', y2: '14' }),
		React.createElement('line', { x1: '10.88', y1: '21.94', x2: '15.46', y2: '14' })
	);
};

chrome.propTypes = propTypes;
chrome.defaultProps = defaultProps;

var circle = function circle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' })
	);
};

circle.propTypes = propTypes;
circle.defaultProps = defaultProps;

var clipboard = function clipboard(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-clipboard ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
		React.createElement('rect', { x: '8', y: '2', width: '8', height: '4', rx: '1', ry: '1' })
	);
};

clipboard.propTypes = propTypes;
clipboard.defaultProps = defaultProps;

var clock = function clock(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-clock ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polyline', { points: '12 6 12 12 16 14' })
	);
};

clock.propTypes = propTypes;
clock.defaultProps = defaultProps;

var cloudDrizzle = function cloudDrizzle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud-drizzle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '8', y1: '19', x2: '8', y2: '21' }),
		React.createElement('line', { x1: '8', y1: '13', x2: '8', y2: '15' }),
		React.createElement('line', { x1: '16', y1: '19', x2: '16', y2: '21' }),
		React.createElement('line', { x1: '16', y1: '13', x2: '16', y2: '15' }),
		React.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
		React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '17' }),
		React.createElement('path', { d: 'M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' })
	);
};

cloudDrizzle.propTypes = propTypes;
cloudDrizzle.defaultProps = defaultProps;

var cloudLightning = function cloudLightning(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud-lightning ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9' }),
		React.createElement('polyline', { points: '13 11 9 17 15 17 11 23' })
	);
};

cloudLightning.propTypes = propTypes;
cloudLightning.defaultProps = defaultProps;

var cloudOff = function cloudOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

cloudOff.propTypes = propTypes;
cloudOff.defaultProps = defaultProps;

var cloudRain = function cloudRain(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud-rain ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '16', y1: '13', x2: '16', y2: '21' }),
		React.createElement('line', { x1: '8', y1: '13', x2: '8', y2: '21' }),
		React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '23' }),
		React.createElement('path', { d: 'M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' })
	);
};

cloudRain.propTypes = propTypes;
cloudRain.defaultProps = defaultProps;

var cloudSnow = function cloudSnow(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud-snow ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25' }),
		React.createElement('line', { x1: '8', y1: '16', x2: '8', y2: '16' }),
		React.createElement('line', { x1: '8', y1: '20', x2: '8', y2: '20' }),
		React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '18' }),
		React.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '22' }),
		React.createElement('line', { x1: '16', y1: '16', x2: '16', y2: '16' }),
		React.createElement('line', { x1: '16', y1: '20', x2: '16', y2: '20' })
	);
};

cloudSnow.propTypes = propTypes;
cloudSnow.defaultProps = defaultProps;

var cloud = function cloud(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cloud ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' })
	);
};

cloud.propTypes = propTypes;
cloud.defaultProps = defaultProps;

var code = function code(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-code ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '16 18 22 12 16 6' }),
		React.createElement('polyline', { points: '8 6 2 12 8 18' })
	);
};

code.propTypes = propTypes;
code.defaultProps = defaultProps;

var codepen = function codepen(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-codepen ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' }),
		React.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '15.5' }),
		React.createElement('polyline', { points: '22 8.5 12 15.5 2 8.5' }),
		React.createElement('polyline', { points: '2 15.5 12 8.5 22 15.5' }),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '8.5' })
	);
};

codepen.propTypes = propTypes;
codepen.defaultProps = defaultProps;

var coffee = function coffee(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-coffee ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 8h1a4 4 0 0 1 0 8h-1' }),
		React.createElement('path', { d: 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' }),
		React.createElement('line', { x1: '6', y1: '1', x2: '6', y2: '4' }),
		React.createElement('line', { x1: '10', y1: '1', x2: '10', y2: '4' }),
		React.createElement('line', { x1: '14', y1: '1', x2: '14', y2: '4' })
	);
};

coffee.propTypes = propTypes;
coffee.defaultProps = defaultProps;

var command = function command(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-command ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' })
	);
};

command.propTypes = propTypes;
command.defaultProps = defaultProps;

var compass = function compass(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-compass ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polygon', { points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' })
	);
};

compass.propTypes = propTypes;
compass.defaultProps = defaultProps;

var copy = function copy(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-copy ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '9', y: '9', width: '13', height: '13', rx: '2', ry: '2' }),
		React.createElement('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
	);
};

copy.propTypes = propTypes;
copy.defaultProps = defaultProps;

var cornerDownLeft = function cornerDownLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-down-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '9 10 4 15 9 20' }),
		React.createElement('path', { d: 'M20 4v7a4 4 0 0 1-4 4H4' })
	);
};

cornerDownLeft.propTypes = propTypes;
cornerDownLeft.defaultProps = defaultProps;

var cornerDownRight = function cornerDownRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-down-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '15 10 20 15 15 20' }),
		React.createElement('path', { d: 'M4 4v7a4 4 0 0 0 4 4h12' })
	);
};

cornerDownRight.propTypes = propTypes;
cornerDownRight.defaultProps = defaultProps;

var cornerLeftDown = function cornerLeftDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-left-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '14 15 9 20 4 15' }),
		React.createElement('path', { d: 'M20 4h-7a4 4 0 0 0-4 4v12' })
	);
};

cornerLeftDown.propTypes = propTypes;
cornerLeftDown.defaultProps = defaultProps;

var cornerLeftUp = function cornerLeftUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-left-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '14 9 9 4 4 9' }),
		React.createElement('path', { d: 'M20 20h-7a4 4 0 0 1-4-4V4' })
	);
};

cornerLeftUp.propTypes = propTypes;
cornerLeftUp.defaultProps = defaultProps;

var cornerRightDown = function cornerRightDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-right-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '10 15 15 20 20 15' }),
		React.createElement('path', { d: 'M4 4h7a4 4 0 0 1 4 4v12' })
	);
};

cornerRightDown.propTypes = propTypes;
cornerRightDown.defaultProps = defaultProps;

var cornerRightUp = function cornerRightUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-right-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '10 9 15 4 20 9' }),
		React.createElement('path', { d: 'M4 20h7a4 4 0 0 0 4-4V4' })
	);
};

cornerRightUp.propTypes = propTypes;
cornerRightUp.defaultProps = defaultProps;

var cornerUpLeft = function cornerUpLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-up-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '9 14 4 9 9 4' }),
		React.createElement('path', { d: 'M20 20v-7a4 4 0 0 0-4-4H4' })
	);
};

cornerUpLeft.propTypes = propTypes;
cornerUpLeft.defaultProps = defaultProps;

var cornerUpRight = function cornerUpRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-corner-up-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '15 14 20 9 15 4' }),
		React.createElement('path', { d: 'M4 20v-7a4 4 0 0 1 4-4h12' })
	);
};

cornerUpRight.propTypes = propTypes;
cornerUpRight.defaultProps = defaultProps;

var cpu = function cpu(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-cpu ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', ry: '2' }),
		React.createElement('rect', { x: '9', y: '9', width: '6', height: '6' }),
		React.createElement('line', { x1: '9', y1: '1', x2: '9', y2: '4' }),
		React.createElement('line', { x1: '15', y1: '1', x2: '15', y2: '4' }),
		React.createElement('line', { x1: '9', y1: '20', x2: '9', y2: '23' }),
		React.createElement('line', { x1: '15', y1: '20', x2: '15', y2: '23' }),
		React.createElement('line', { x1: '20', y1: '9', x2: '23', y2: '9' }),
		React.createElement('line', { x1: '20', y1: '14', x2: '23', y2: '14' }),
		React.createElement('line', { x1: '1', y1: '9', x2: '4', y2: '9' }),
		React.createElement('line', { x1: '1', y1: '14', x2: '4', y2: '14' })
	);
};

cpu.propTypes = propTypes;
cpu.defaultProps = defaultProps;

var creditCard = function creditCard(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-credit-card ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '1', y: '4', width: '22', height: '16', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '1', y1: '10', x2: '23', y2: '10' })
	);
};

creditCard.propTypes = propTypes;
creditCard.defaultProps = defaultProps;

var crop = function crop(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-crop ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M6.13 1L6 16a2 2 0 0 0 2 2h15' }),
		React.createElement('path', { d: 'M1 6.13L16 6a2 2 0 0 1 2 2v15' })
	);
};

crop.propTypes = propTypes;
crop.defaultProps = defaultProps;

var crosshair = function crosshair(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-crosshair ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '22', y1: '12', x2: '18', y2: '12' }),
		React.createElement('line', { x1: '6', y1: '12', x2: '2', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '6', x2: '12', y2: '2' }),
		React.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '18' })
	);
};

crosshair.propTypes = propTypes;
crosshair.defaultProps = defaultProps;

var database = function database(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-database ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
		React.createElement('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
		React.createElement('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' })
	);
};

database.propTypes = propTypes;
database.defaultProps = defaultProps;

var remove = function remove(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-remove ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' }),
		React.createElement('line', { x1: '18', y1: '9', x2: '12', y2: '15' }),
		React.createElement('line', { x1: '12', y1: '9', x2: '18', y2: '15' })
	);
};

remove.propTypes = propTypes;
remove.defaultProps = defaultProps;

var disc = function disc(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-disc ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '3' })
	);
};

disc.propTypes = propTypes;
disc.defaultProps = defaultProps;

var dollarSign = function dollarSign(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-dollar-sign ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
		React.createElement('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
	);
};

dollarSign.propTypes = propTypes;
dollarSign.defaultProps = defaultProps;

var downloadCloud = function downloadCloud(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-download-cloud ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '8 17 12 21 16 17' }),
		React.createElement('line', { x1: '12', y1: '12', x2: '12', y2: '21' }),
		React.createElement('path', { d: 'M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29' })
	);
};

downloadCloud.propTypes = propTypes;
downloadCloud.defaultProps = defaultProps;

var download = function download(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-download ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
		React.createElement('polyline', { points: '7 10 12 15 17 10' }),
		React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '3' })
	);
};

download.propTypes = propTypes;
download.defaultProps = defaultProps;

var droplet = function droplet(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-droplet ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' })
	);
};

droplet.propTypes = propTypes;
droplet.defaultProps = defaultProps;

var edit2 = function edit2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-edit-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z' })
	);
};

edit2.propTypes = propTypes;
edit2.defaultProps = defaultProps;

var edit3 = function edit3(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-edit-3 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12 20h9' }),
		React.createElement('path', { d: 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' })
	);
};

edit3.propTypes = propTypes;
edit3.defaultProps = defaultProps;

var edit = function edit(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-edit ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' }),
		React.createElement('path', { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' })
	);
};

edit.propTypes = propTypes;
edit.defaultProps = defaultProps;

var externalLink = function externalLink(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-external-link ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
		React.createElement('polyline', { points: '15 3 21 3 21 9' }),
		React.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
	);
};

externalLink.propTypes = propTypes;
externalLink.defaultProps = defaultProps;

var eyeOff = function eyeOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-eye-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

eyeOff.propTypes = propTypes;
eyeOff.defaultProps = defaultProps;

var eye = function eye(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-eye ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '3' })
	);
};

eye.propTypes = propTypes;
eye.defaultProps = defaultProps;

var facebook = function facebook(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-facebook ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })
	);
};

facebook.propTypes = propTypes;
facebook.defaultProps = defaultProps;

var fastForward = function fastForward(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-fast-forward ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '13 19 22 12 13 5 13 19' }),
		React.createElement('polygon', { points: '2 19 11 12 2 5 2 19' })
	);
};

fastForward.propTypes = propTypes;
fastForward.defaultProps = defaultProps;

var feather = function feather(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-feather ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z' }),
		React.createElement('line', { x1: '16', y1: '8', x2: '2', y2: '22' }),
		React.createElement('line', { x1: '17.5', y1: '15', x2: '9', y2: '15' })
	);
};

feather.propTypes = propTypes;
feather.defaultProps = defaultProps;

var figma = function figma(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-figma ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z' }),
		React.createElement('path', { d: 'M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z' }),
		React.createElement('path', { d: 'M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z' }),
		React.createElement('path', { d: 'M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z' }),
		React.createElement('path', { d: 'M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z' })
	);
};

figma.propTypes = propTypes;
figma.defaultProps = defaultProps;

var fileMinus = function fileMinus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-file-minus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
		React.createElement('polyline', { points: '14 2 14 8 20 8' }),
		React.createElement('line', { x1: '9', y1: '15', x2: '15', y2: '15' })
	);
};

fileMinus.propTypes = propTypes;
fileMinus.defaultProps = defaultProps;

var filePlus = function filePlus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-file-plus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
		React.createElement('polyline', { points: '14 2 14 8 20 8' }),
		React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '12' }),
		React.createElement('line', { x1: '9', y1: '15', x2: '15', y2: '15' })
	);
};

filePlus.propTypes = propTypes;
filePlus.defaultProps = defaultProps;

var fileText = function fileText(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-file-text ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
		React.createElement('polyline', { points: '14 2 14 8 20 8' }),
		React.createElement('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
		React.createElement('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
		React.createElement('polyline', { points: '10 9 9 9 8 9' })
	);
};

fileText.propTypes = propTypes;
fileText.defaultProps = defaultProps;

var file = function file(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-file ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }),
		React.createElement('polyline', { points: '13 2 13 9 20 9' })
	);
};

file.propTypes = propTypes;
file.defaultProps = defaultProps;

var film = function film(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-film ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2.18', ry: '2.18' }),
		React.createElement('line', { x1: '7', y1: '2', x2: '7', y2: '22' }),
		React.createElement('line', { x1: '17', y1: '2', x2: '17', y2: '22' }),
		React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
		React.createElement('line', { x1: '2', y1: '7', x2: '7', y2: '7' }),
		React.createElement('line', { x1: '2', y1: '17', x2: '7', y2: '17' }),
		React.createElement('line', { x1: '17', y1: '17', x2: '22', y2: '17' }),
		React.createElement('line', { x1: '17', y1: '7', x2: '22', y2: '7' })
	);
};

film.propTypes = propTypes;
film.defaultProps = defaultProps;

var filter = function filter(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-filter ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' })
	);
};

filter.propTypes = propTypes;
filter.defaultProps = defaultProps;

var flag = function flag(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-flag ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' }),
		React.createElement('line', { x1: '4', y1: '22', x2: '4', y2: '15' })
	);
};

flag.propTypes = propTypes;
flag.defaultProps = defaultProps;

var folderMinus = function folderMinus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-folder-minus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' }),
		React.createElement('line', { x1: '9', y1: '14', x2: '15', y2: '14' })
	);
};

folderMinus.propTypes = propTypes;
folderMinus.defaultProps = defaultProps;

var folderPlus = function folderPlus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-folder-plus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' }),
		React.createElement('line', { x1: '12', y1: '11', x2: '12', y2: '17' }),
		React.createElement('line', { x1: '9', y1: '14', x2: '15', y2: '14' })
	);
};

folderPlus.propTypes = propTypes;
folderPlus.defaultProps = defaultProps;

var folder = function folder(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-folder ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' })
	);
};

folder.propTypes = propTypes;
folder.defaultProps = defaultProps;

var frown = function frown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-frown ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('path', { d: 'M16 16s-1.5-2-4-2-4 2-4 2' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '9.01', y2: '9' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '15.01', y2: '9' })
	);
};

frown.propTypes = propTypes;
frown.defaultProps = defaultProps;

var gift = function gift(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-gift ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '20 12 20 22 4 22 4 12' }),
		React.createElement('rect', { x: '2', y: '7', width: '20', height: '5' }),
		React.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '7' }),
		React.createElement('path', { d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' }),
		React.createElement('path', { d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' })
	);
};

gift.propTypes = propTypes;
gift.defaultProps = defaultProps;

var gitBranch = function gitBranch(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-git-branch ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '6', y1: '3', x2: '6', y2: '15' }),
		React.createElement('circle', { cx: '18', cy: '6', r: '3' }),
		React.createElement('circle', { cx: '6', cy: '18', r: '3' }),
		React.createElement('path', { d: 'M18 9a9 9 0 0 1-9 9' })
	);
};

gitBranch.propTypes = propTypes;
gitBranch.defaultProps = defaultProps;

var gitCommit = function gitCommit(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-git-commit ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '4' }),
		React.createElement('line', { x1: '1.05', y1: '12', x2: '7', y2: '12' }),
		React.createElement('line', { x1: '17.01', y1: '12', x2: '22.96', y2: '12' })
	);
};

gitCommit.propTypes = propTypes;
gitCommit.defaultProps = defaultProps;

var gitMerge = function gitMerge(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-git-merge ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '18', cy: '18', r: '3' }),
		React.createElement('circle', { cx: '6', cy: '6', r: '3' }),
		React.createElement('path', { d: 'M6 21V9a9 9 0 0 0 9 9' })
	);
};

gitMerge.propTypes = propTypes;
gitMerge.defaultProps = defaultProps;

var gitPullRequest = function gitPullRequest(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-git-pull-request ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '18', cy: '18', r: '3' }),
		React.createElement('circle', { cx: '6', cy: '6', r: '3' }),
		React.createElement('path', { d: 'M13 6h3a2 2 0 0 1 2 2v7' }),
		React.createElement('line', { x1: '6', y1: '9', x2: '6', y2: '21' })
	);
};

gitPullRequest.propTypes = propTypes;
gitPullRequest.defaultProps = defaultProps;

var github = function github(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-github ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' })
	);
};

github.propTypes = propTypes;
github.defaultProps = defaultProps;

var gitlab = function gitlab(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-gitlab ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z' })
	);
};

gitlab.propTypes = propTypes;
gitlab.defaultProps = defaultProps;

var globe = function globe(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-globe ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
		React.createElement('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
	);
};

globe.propTypes = propTypes;
globe.defaultProps = defaultProps;

var grid = function grid(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-grid ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '7', height: '7' }),
		React.createElement('rect', { x: '14', y: '3', width: '7', height: '7' }),
		React.createElement('rect', { x: '14', y: '14', width: '7', height: '7' }),
		React.createElement('rect', { x: '3', y: '14', width: '7', height: '7' })
	);
};

grid.propTypes = propTypes;
grid.defaultProps = defaultProps;

var hardDrive = function hardDrive(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-hard-drive ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '22', y1: '12', x2: '2', y2: '12' }),
		React.createElement('path', { d: 'M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' }),
		React.createElement('line', { x1: '6', y1: '16', x2: '6', y2: '16' }),
		React.createElement('line', { x1: '10', y1: '16', x2: '10', y2: '16' })
	);
};

hardDrive.propTypes = propTypes;
hardDrive.defaultProps = defaultProps;

var hash = function hash(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-hash ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
		React.createElement('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
		React.createElement('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
		React.createElement('line', { x1: '16', y1: '3', x2: '14', y2: '21' })
	);
};

hash.propTypes = propTypes;
hash.defaultProps = defaultProps;

var headphones = function headphones(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-headphones ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M3 18v-6a9 9 0 0 1 18 0v6' }),
		React.createElement('path', { d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' })
	);
};

headphones.propTypes = propTypes;
headphones.defaultProps = defaultProps;

var heart = function heart(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-heart ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' })
	);
};

heart.propTypes = propTypes;
heart.defaultProps = defaultProps;

var helpCircle = function helpCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-help-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' }),
		React.createElement('line', { x1: '12', y1: '17', x2: '12', y2: '17' })
	);
};

helpCircle.propTypes = propTypes;
helpCircle.defaultProps = defaultProps;

var home = function home(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-home ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
		React.createElement('polyline', { points: '9 22 9 12 15 12 15 22' })
	);
};

home.propTypes = propTypes;
home.defaultProps = defaultProps;

var image = function image(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-image ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('circle', { cx: '8.5', cy: '8.5', r: '1.5' }),
		React.createElement('polyline', { points: '21 15 16 10 5 21' })
	);
};

image.propTypes = propTypes;
image.defaultProps = defaultProps;

var inbox = function inbox(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-inbox ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '22 12 16 12 14 15 10 15 8 12 2 12' }),
		React.createElement('path', { d: 'M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' })
	);
};

inbox.propTypes = propTypes;
inbox.defaultProps = defaultProps;

var info = function info(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-info ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '8' })
	);
};

info.propTypes = propTypes;
info.defaultProps = defaultProps;

var instagram = function instagram(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-instagram ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
		React.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
		React.createElement('line', { x1: '17.5', y1: '6.5', x2: '17.5', y2: '6.5' })
	);
};

instagram.propTypes = propTypes;
instagram.defaultProps = defaultProps;

var italic = function italic(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-italic ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '19', y1: '4', x2: '10', y2: '4' }),
		React.createElement('line', { x1: '14', y1: '20', x2: '5', y2: '20' }),
		React.createElement('line', { x1: '15', y1: '4', x2: '9', y2: '20' })
	);
};

italic.propTypes = propTypes;
italic.defaultProps = defaultProps;

var key = function key(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-key ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4' })
	);
};

key.propTypes = propTypes;
key.defaultProps = defaultProps;

var layers = function layers(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-layers ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '12 2 2 7 12 12 22 7 12 2' }),
		React.createElement('polyline', { points: '2 17 12 22 22 17' }),
		React.createElement('polyline', { points: '2 12 12 17 22 12' })
	);
};

layers.propTypes = propTypes;
layers.defaultProps = defaultProps;

var layout = function layout(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-layout ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '3', y1: '9', x2: '21', y2: '9' }),
		React.createElement('line', { x1: '9', y1: '21', x2: '9', y2: '9' })
	);
};

layout.propTypes = propTypes;
layout.defaultProps = defaultProps;

var lifeBuoy = function lifeBuoy(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-life-buoy ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '4' }),
		React.createElement('line', { x1: '4.93', y1: '4.93', x2: '9.17', y2: '9.17' }),
		React.createElement('line', { x1: '14.83', y1: '14.83', x2: '19.07', y2: '19.07' }),
		React.createElement('line', { x1: '14.83', y1: '9.17', x2: '19.07', y2: '4.93' }),
		React.createElement('line', { x1: '14.83', y1: '9.17', x2: '18.36', y2: '5.64' }),
		React.createElement('line', { x1: '4.93', y1: '19.07', x2: '9.17', y2: '14.83' })
	);
};

lifeBuoy.propTypes = propTypes;
lifeBuoy.defaultProps = defaultProps;

var link2 = function link2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-link-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

link2.propTypes = propTypes;
link2.defaultProps = defaultProps;

var link = function link(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-link ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' }),
		React.createElement('path', { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' })
	);
};

link.propTypes = propTypes;
link.defaultProps = defaultProps;

var linkedin = function linkedin(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-linkedin ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
		React.createElement('rect', { x: '2', y: '9', width: '4', height: '12' }),
		React.createElement('circle', { cx: '4', cy: '4', r: '2' })
	);
};

linkedin.propTypes = propTypes;
linkedin.defaultProps = defaultProps;

var list = function list(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-list ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '8', y1: '6', x2: '21', y2: '6' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '21', y2: '12' }),
		React.createElement('line', { x1: '8', y1: '18', x2: '21', y2: '18' }),
		React.createElement('line', { x1: '3', y1: '6', x2: '3', y2: '6' }),
		React.createElement('line', { x1: '3', y1: '12', x2: '3', y2: '12' }),
		React.createElement('line', { x1: '3', y1: '18', x2: '3', y2: '18' })
	);
};

list.propTypes = propTypes;
list.defaultProps = defaultProps;

var loader = function loader(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-loader ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '6' }),
		React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '22' }),
		React.createElement('line', { x1: '4.93', y1: '4.93', x2: '7.76', y2: '7.76' }),
		React.createElement('line', { x1: '16.24', y1: '16.24', x2: '19.07', y2: '19.07' }),
		React.createElement('line', { x1: '2', y1: '12', x2: '6', y2: '12' }),
		React.createElement('line', { x1: '18', y1: '12', x2: '22', y2: '12' }),
		React.createElement('line', { x1: '4.93', y1: '19.07', x2: '7.76', y2: '16.24' }),
		React.createElement('line', { x1: '16.24', y1: '7.76', x2: '19.07', y2: '4.93' })
	);
};

loader.propTypes = propTypes;
loader.defaultProps = defaultProps;

var lock = function lock(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-lock ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
		React.createElement('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
	);
};

lock.propTypes = propTypes;
lock.defaultProps = defaultProps;

var logIn = function logIn(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-log-in ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' }),
		React.createElement('polyline', { points: '10 17 15 12 10 7' }),
		React.createElement('line', { x1: '15', y1: '12', x2: '3', y2: '12' })
	);
};

logIn.propTypes = propTypes;
logIn.defaultProps = defaultProps;

var logOut = function logOut(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-log-out ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' }),
		React.createElement('polyline', { points: '16 17 21 12 16 7' }),
		React.createElement('line', { x1: '21', y1: '12', x2: '9', y2: '12' })
	);
};

logOut.propTypes = propTypes;
logOut.defaultProps = defaultProps;

var mail = function mail(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-mail ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
		React.createElement('polyline', { points: '22,6 12,13 2,6' })
	);
};

mail.propTypes = propTypes;
mail.defaultProps = defaultProps;

var mapPin = function mapPin(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-map-pin ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
		React.createElement('circle', { cx: '12', cy: '10', r: '3' })
	);
};

mapPin.propTypes = propTypes;
mapPin.defaultProps = defaultProps;

var map = function map(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-map ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6' }),
		React.createElement('line', { x1: '8', y1: '2', x2: '8', y2: '18' }),
		React.createElement('line', { x1: '16', y1: '6', x2: '16', y2: '22' })
	);
};

map.propTypes = propTypes;
map.defaultProps = defaultProps;

var maximize2 = function maximize2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-maximize-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '15 3 21 3 21 9' }),
		React.createElement('polyline', { points: '9 21 3 21 3 15' }),
		React.createElement('line', { x1: '21', y1: '3', x2: '14', y2: '10' }),
		React.createElement('line', { x1: '3', y1: '21', x2: '10', y2: '14' })
	);
};

maximize2.propTypes = propTypes;
maximize2.defaultProps = defaultProps;

var maximize = function maximize(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-maximize ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3' })
	);
};

maximize.propTypes = propTypes;
maximize.defaultProps = defaultProps;

var meh = function meh(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-meh ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '8', y1: '15', x2: '16', y2: '15' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '9.01', y2: '9' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '15.01', y2: '9' })
	);
};

meh.propTypes = propTypes;
meh.defaultProps = defaultProps;

var menu = function menu(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-menu ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '3', y1: '12', x2: '21', y2: '12' }),
		React.createElement('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
		React.createElement('line', { x1: '3', y1: '18', x2: '21', y2: '18' })
	);
};

menu.propTypes = propTypes;
menu.defaultProps = defaultProps;

var messageCircle = function messageCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-message-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
	);
};

messageCircle.propTypes = propTypes;
messageCircle.defaultProps = defaultProps;

var messageSquare = function messageSquare(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-message-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
	);
};

messageSquare.propTypes = propTypes;
messageSquare.defaultProps = defaultProps;

var micOff = function micOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-mic-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' }),
		React.createElement('path', { d: 'M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6' }),
		React.createElement('path', { d: 'M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23' }),
		React.createElement('line', { x1: '12', y1: '19', x2: '12', y2: '23' }),
		React.createElement('line', { x1: '8', y1: '23', x2: '16', y2: '23' })
	);
};

micOff.propTypes = propTypes;
micOff.defaultProps = defaultProps;

var mic = function mic(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-mic ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z' }),
		React.createElement('path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2' }),
		React.createElement('line', { x1: '12', y1: '19', x2: '12', y2: '23' }),
		React.createElement('line', { x1: '8', y1: '23', x2: '16', y2: '23' })
	);
};

mic.propTypes = propTypes;
mic.defaultProps = defaultProps;

var minimize2 = function minimize2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-minimize-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '4 14 10 14 10 20' }),
		React.createElement('polyline', { points: '20 10 14 10 14 4' }),
		React.createElement('line', { x1: '14', y1: '10', x2: '21', y2: '3' }),
		React.createElement('line', { x1: '3', y1: '21', x2: '10', y2: '14' })
	);
};

minimize2.propTypes = propTypes;
minimize2.defaultProps = defaultProps;

var minimize = function minimize(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-minimize ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3' })
	);
};

minimize.propTypes = propTypes;
minimize.defaultProps = defaultProps;

var minusCircle = function minusCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-minus-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

minusCircle.propTypes = propTypes;
minusCircle.defaultProps = defaultProps;

var minusSquare = function minusSquare(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-minus-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

minusSquare.propTypes = propTypes;
minusSquare.defaultProps = defaultProps;

var minus = function minus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-minus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
	);
};

minus.propTypes = propTypes;
minus.defaultProps = defaultProps;

var monitor = function monitor(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-monitor ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
		React.createElement('line', { x1: '12', y1: '17', x2: '12', y2: '21' })
	);
};

monitor.propTypes = propTypes;
monitor.defaultProps = defaultProps;

var moon = function moon(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-moon ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
	);
};

moon.propTypes = propTypes;
moon.defaultProps = defaultProps;

var moreHorizontal = function moreHorizontal(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-more-horizontal ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '1' }),
		React.createElement('circle', { cx: '19', cy: '12', r: '1' }),
		React.createElement('circle', { cx: '5', cy: '12', r: '1' })
	);
};

moreHorizontal.propTypes = propTypes;
moreHorizontal.defaultProps = defaultProps;

var moreVertical = function moreVertical(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-more-vertical ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '1' }),
		React.createElement('circle', { cx: '12', cy: '5', r: '1' }),
		React.createElement('circle', { cx: '12', cy: '19', r: '1' })
	);
};

moreVertical.propTypes = propTypes;
moreVertical.defaultProps = defaultProps;

var mousePointer = function mousePointer(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-mouse-pointer ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z' }),
		React.createElement('path', { d: 'M13 13l6 6' })
	);
};

mousePointer.propTypes = propTypes;
mousePointer.defaultProps = defaultProps;

var move = function move(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-move ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '5 9 2 12 5 15' }),
		React.createElement('polyline', { points: '9 5 12 2 15 5' }),
		React.createElement('polyline', { points: '15 19 12 22 9 19' }),
		React.createElement('polyline', { points: '19 9 22 12 19 15' }),
		React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '22' })
	);
};

move.propTypes = propTypes;
move.defaultProps = defaultProps;

var music = function music(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-music ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M9 18V5l12-2v13' }),
		React.createElement('circle', { cx: '6', cy: '18', r: '3' }),
		React.createElement('circle', { cx: '18', cy: '16', r: '3' })
	);
};

music.propTypes = propTypes;
music.defaultProps = defaultProps;

var navigation2 = function navigation2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-navigation-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '12 2 19 21 12 17 5 21 12 2' })
	);
};

navigation2.propTypes = propTypes;
navigation2.defaultProps = defaultProps;

var navigation = function navigation(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-navigation ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '3 11 22 2 13 21 11 13 3 11' })
	);
};

navigation.propTypes = propTypes;
navigation.defaultProps = defaultProps;

var octagon = function octagon(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-octagon ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2' })
	);
};

octagon.propTypes = propTypes;
octagon.defaultProps = defaultProps;

var packageIcon = function packageIcon(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-packageIcon ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z' }),
		React.createElement('polyline', { points: '2.32 6.16 12 11 21.68 6.16' }),
		React.createElement('line', { x1: '12', y1: '22.76', x2: '12', y2: '11' }),
		React.createElement('line', { x1: '7', y1: '3.5', x2: '17', y2: '8.5' })
	);
};

packageIcon.propTypes = propTypes;
packageIcon.defaultProps = defaultProps;

var paperclip = function paperclip(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-paperclip ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' })
	);
};

paperclip.propTypes = propTypes;
paperclip.defaultProps = defaultProps;

var pauseCircle = function pauseCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-pause-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '10', y1: '15', x2: '10', y2: '9' }),
		React.createElement('line', { x1: '14', y1: '15', x2: '14', y2: '9' })
	);
};

pauseCircle.propTypes = propTypes;
pauseCircle.defaultProps = defaultProps;

var pause = function pause(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-pause ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '6', y: '4', width: '4', height: '16' }),
		React.createElement('rect', { x: '14', y: '4', width: '4', height: '16' })
	);
};

pause.propTypes = propTypes;
pause.defaultProps = defaultProps;

var penTool = function penTool(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-pen-tool ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12 19l7-7 3 3-7 7-3-3z' }),
		React.createElement('path', { d: 'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z' }),
		React.createElement('path', { d: 'M2 2l7.586 7.586' }),
		React.createElement('circle', { cx: '11', cy: '11', r: '2' })
	);
};

penTool.propTypes = propTypes;
penTool.defaultProps = defaultProps;

var percent = function percent(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-percent ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '19', y1: '5', x2: '5', y2: '19' }),
		React.createElement('circle', { cx: '6.5', cy: '6.5', r: '2.5' }),
		React.createElement('circle', { cx: '17.5', cy: '17.5', r: '2.5' })
	);
};

percent.propTypes = propTypes;
percent.defaultProps = defaultProps;

var phoneCall = function phoneCall(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-call ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phoneCall.propTypes = propTypes;
phoneCall.defaultProps = defaultProps;

var phoneForwarded = function phoneForwarded(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-forwarded ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '19 1 23 5 19 9' }),
		React.createElement('line', { x1: '15', y1: '5', x2: '23', y2: '5' }),
		React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phoneForwarded.propTypes = propTypes;
phoneForwarded.defaultProps = defaultProps;

var phoneIncoming = function phoneIncoming(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-incoming ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '16 2 16 8 22 8' }),
		React.createElement('line', { x1: '23', y1: '1', x2: '16', y2: '8' }),
		React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phoneIncoming.propTypes = propTypes;
phoneIncoming.defaultProps = defaultProps;

var phoneMissed = function phoneMissed(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-missed ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '23', y1: '1', x2: '17', y2: '7' }),
		React.createElement('line', { x1: '17', y1: '1', x2: '23', y2: '7' }),
		React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phoneMissed.propTypes = propTypes;
phoneMissed.defaultProps = defaultProps;

var phoneOff = function phoneOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91' }),
		React.createElement('line', { x1: '23', y1: '1', x2: '1', y2: '23' })
	);
};

phoneOff.propTypes = propTypes;
phoneOff.defaultProps = defaultProps;

var phoneOutgoing = function phoneOutgoing(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone-outgoing ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '23 7 23 1 17 1' }),
		React.createElement('line', { x1: '16', y1: '8', x2: '23', y2: '1' }),
		React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phoneOutgoing.propTypes = propTypes;
phoneOutgoing.defaultProps = defaultProps;

var phone = function phone(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-phone ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
	);
};

phone.propTypes = propTypes;
phone.defaultProps = defaultProps;

var pieChart = function pieChart(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-pie-chart ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21.21 15.89A10 10 0 1 1 8 2.83' }),
		React.createElement('path', { d: 'M22 12A10 10 0 0 0 12 2v10z' })
	);
};

pieChart.propTypes = propTypes;
pieChart.defaultProps = defaultProps;

var playCircle = function playCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-play-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('polygon', { points: '10 8 16 12 10 16 10 8' })
	);
};

playCircle.propTypes = propTypes;
playCircle.defaultProps = defaultProps;

var play = function play(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-play ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '5 3 19 12 5 21 5 3' })
	);
};

play.propTypes = propTypes;
play.defaultProps = defaultProps;

var plusCircle = function plusCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-plus-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '16' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

plusCircle.propTypes = propTypes;
plusCircle.defaultProps = defaultProps;

var plusSquare = function plusSquare(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-plus-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '16' }),
		React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	);
};

plusSquare.propTypes = propTypes;
plusSquare.defaultProps = defaultProps;

var plus = function plus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-plus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
		React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
	);
};

plus.propTypes = propTypes;
plus.defaultProps = defaultProps;

var pocket = function pocket(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-pocket ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z' }),
		React.createElement('polyline', { points: '8 10 12 14 16 10' })
	);
};

pocket.propTypes = propTypes;
pocket.defaultProps = defaultProps;

var power = function power(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-power ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M18.36 6.64a9 9 0 1 1-12.73 0' }),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '12' })
	);
};

power.propTypes = propTypes;
power.defaultProps = defaultProps;

var printer = function printer(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-printer ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '6 9 6 2 18 2 18 9' }),
		React.createElement('path', { d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' }),
		React.createElement('rect', { x: '6', y: '14', width: '12', height: '8' })
	);
};

printer.propTypes = propTypes;
printer.defaultProps = defaultProps;

var radio = function radio(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-radio ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '2' }),
		React.createElement('path', { d: 'M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14' })
	);
};

radio.propTypes = propTypes;
radio.defaultProps = defaultProps;

var refreshCcw = function refreshCcw(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-refresh-ccw ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '1 4 1 10 7 10' }),
		React.createElement('polyline', { points: '23 20 23 14 17 14' }),
		React.createElement('path', { d: 'M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15' })
	);
};

refreshCcw.propTypes = propTypes;
refreshCcw.defaultProps = defaultProps;

var refreshCw = function refreshCw(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-refresh-cw ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '23 4 23 10 17 10' }),
		React.createElement('polyline', { points: '1 20 1 14 7 14' }),
		React.createElement('path', { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' })
	);
};

refreshCw.propTypes = propTypes;
refreshCw.defaultProps = defaultProps;

var repeat = function repeat(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-repeat ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '17 1 21 5 17 9' }),
		React.createElement('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
		React.createElement('polyline', { points: '7 23 3 19 7 15' }),
		React.createElement('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
	);
};

repeat.propTypes = propTypes;
repeat.defaultProps = defaultProps;

var rewind = function rewind(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-rewind ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '11 19 2 12 11 5 11 19' }),
		React.createElement('polygon', { points: '22 19 13 12 22 5 22 19' })
	);
};

rewind.propTypes = propTypes;
rewind.defaultProps = defaultProps;

var rotateCcw = function rotateCcw(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-rotate-ccw ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '1 4 1 10 7 10' }),
		React.createElement('path', { d: 'M3.51 15a9 9 0 1 0 2.13-9.36L1 10' })
	);
};

rotateCcw.propTypes = propTypes;
rotateCcw.defaultProps = defaultProps;

var rotateCw = function rotateCw(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-rotate-cw ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '23 4 23 10 17 10' }),
		React.createElement('path', { d: 'M20.49 15a9 9 0 1 1-2.12-9.36L23 10' })
	);
};

rotateCw.propTypes = propTypes;
rotateCw.defaultProps = defaultProps;

var rss = function rss(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-rss ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 11a9 9 0 0 1 9 9' }),
		React.createElement('path', { d: 'M4 4a16 16 0 0 1 16 16' }),
		React.createElement('circle', { cx: '5', cy: '19', r: '1' })
	);
};

rss.propTypes = propTypes;
rss.defaultProps = defaultProps;

var save = function save(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-save ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' }),
		React.createElement('polyline', { points: '17 21 17 13 7 13 7 21' }),
		React.createElement('polyline', { points: '7 3 7 8 15 8' })
	);
};

save.propTypes = propTypes;
save.defaultProps = defaultProps;

var scissors = function scissors(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-scissors ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '6', cy: '6', r: '3' }),
		React.createElement('circle', { cx: '6', cy: '18', r: '3' }),
		React.createElement('line', { x1: '20', y1: '4', x2: '8.12', y2: '15.88' }),
		React.createElement('line', { x1: '14.47', y1: '14.48', x2: '20', y2: '20' }),
		React.createElement('line', { x1: '8.12', y1: '8.12', x2: '12', y2: '12' })
	);
};

scissors.propTypes = propTypes;
scissors.defaultProps = defaultProps;

var search = function search(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-search ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
		React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
	);
};

search.propTypes = propTypes;
search.defaultProps = defaultProps;

var send = function send(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-send ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '22', y1: '2', x2: '11', y2: '13' }),
		React.createElement('polygon', { points: '22 2 15 22 11 13 2 9 22 2' })
	);
};

send.propTypes = propTypes;
send.defaultProps = defaultProps;

var server = function server(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-server ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2', ry: '2' }),
		React.createElement('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '6', y1: '6', x2: '6', y2: '6' }),
		React.createElement('line', { x1: '6', y1: '18', x2: '6', y2: '18' })
	);
};

server.propTypes = propTypes;
server.defaultProps = defaultProps;

var settings = function settings(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-settings ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '3' }),
		React.createElement('path', { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })
	);
};

settings.propTypes = propTypes;
settings.defaultProps = defaultProps;

var share2 = function share2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-share-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '18', cy: '5', r: '3' }),
		React.createElement('circle', { cx: '6', cy: '12', r: '3' }),
		React.createElement('circle', { cx: '18', cy: '19', r: '3' }),
		React.createElement('line', { x1: '8.59', y1: '13.51', x2: '15.42', y2: '17.49' }),
		React.createElement('line', { x1: '15.41', y1: '6.51', x2: '8.59', y2: '10.49' })
	);
};

share2.propTypes = propTypes;
share2.defaultProps = defaultProps;

var share = function share(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-share ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' }),
		React.createElement('polyline', { points: '16 6 12 2 8 6' }),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '15' })
	);
};

share.propTypes = propTypes;
share.defaultProps = defaultProps;

var shieldOff = function shieldOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-shield-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18' }),
		React.createElement('path', { d: 'M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

shieldOff.propTypes = propTypes;
shieldOff.defaultProps = defaultProps;

var shield = function shield(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-shield ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
	);
};

shield.propTypes = propTypes;
shield.defaultProps = defaultProps;

var shoppingBag = function shoppingBag(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-shopping-bag ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
		React.createElement('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
		React.createElement('path', { d: 'M16 10a4 4 0 0 1-8 0' })
	);
};

shoppingBag.propTypes = propTypes;
shoppingBag.defaultProps = defaultProps;

var shoppingCart = function shoppingCart(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-shopping-cart ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '9', cy: '21', r: '1' }),
		React.createElement('circle', { cx: '20', cy: '21', r: '1' }),
		React.createElement('path', { d: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' })
	);
};

shoppingCart.propTypes = propTypes;
shoppingCart.defaultProps = defaultProps;

var shuffle = function shuffle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-shuffle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '16 3 21 3 21 8' }),
		React.createElement('line', { x1: '4', y1: '20', x2: '21', y2: '3' }),
		React.createElement('polyline', { points: '21 16 21 21 16 21' }),
		React.createElement('line', { x1: '15', y1: '15', x2: '21', y2: '21' }),
		React.createElement('line', { x1: '4', y1: '4', x2: '9', y2: '9' })
	);
};

shuffle.propTypes = propTypes;
shuffle.defaultProps = defaultProps;

var sidebar = function sidebar(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-sidebar ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '9', y1: '3', x2: '9', y2: '21' })
	);
};

sidebar.propTypes = propTypes;
sidebar.defaultProps = defaultProps;

var skipBack = function skipBack(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-skip-back ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '19 20 9 12 19 4 19 20' }),
		React.createElement('line', { x1: '5', y1: '19', x2: '5', y2: '5' })
	);
};

skipBack.propTypes = propTypes;
skipBack.defaultProps = defaultProps;

var skipForward = function skipForward(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-skip-forward ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '5 4 15 12 5 20 5 4' }),
		React.createElement('line', { x1: '19', y1: '5', x2: '19', y2: '19' })
	);
};

skipForward.propTypes = propTypes;
skipForward.defaultProps = defaultProps;

var slack = function slack(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-slack ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z' }),
		React.createElement('path', { d: 'M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' }),
		React.createElement('path', { d: 'M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z' }),
		React.createElement('path', { d: 'M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z' }),
		React.createElement('path', { d: 'M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z' }),
		React.createElement('path', { d: 'M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z' }),
		React.createElement('path', { d: 'M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z' }),
		React.createElement('path', { d: 'M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z' })
	);
};

slack.propTypes = propTypes;
slack.defaultProps = defaultProps;

var slash = function slash(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-slash ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '4.93', y1: '4.93', x2: '19.07', y2: '19.07' })
	);
};

slash.propTypes = propTypes;
slash.defaultProps = defaultProps;

var sliders = function sliders(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-sliders ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '4', y1: '21', x2: '4', y2: '14' }),
		React.createElement('line', { x1: '4', y1: '10', x2: '4', y2: '3' }),
		React.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '12' }),
		React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '3' }),
		React.createElement('line', { x1: '20', y1: '21', x2: '20', y2: '16' }),
		React.createElement('line', { x1: '20', y1: '12', x2: '20', y2: '3' }),
		React.createElement('line', { x1: '1', y1: '14', x2: '7', y2: '14' }),
		React.createElement('line', { x1: '9', y1: '8', x2: '15', y2: '8' }),
		React.createElement('line', { x1: '17', y1: '16', x2: '23', y2: '16' })
	);
};

sliders.propTypes = propTypes;
sliders.defaultProps = defaultProps;

var smartphone = function smartphone(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-smartphone ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '18' })
	);
};

smartphone.propTypes = propTypes;
smartphone.defaultProps = defaultProps;

var smile = function smile(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-smile ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('path', { d: 'M8 14s1.5 2 4 2 4-2 4-2' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '9.01', y2: '9' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '15.01', y2: '9' })
	);
};

smile.propTypes = propTypes;
smile.defaultProps = defaultProps;

var speaker = function speaker(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-speaker ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2', ry: '2' }),
		React.createElement('circle', { cx: '12', cy: '14', r: '4' }),
		React.createElement('line', { x1: '12', y1: '6', x2: '12', y2: '6' })
	);
};

speaker.propTypes = propTypes;
speaker.defaultProps = defaultProps;

var square = function square(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' })
	);
};

square.propTypes = propTypes;
square.defaultProps = defaultProps;

var star = function star(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-star ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
	);
};

star.propTypes = propTypes;
star.defaultProps = defaultProps;

var stopCircle = function stopCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-stop-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('rect', { x: '9', y: '9', width: '6', height: '6' })
	);
};

stopCircle.propTypes = propTypes;
stopCircle.defaultProps = defaultProps;

var sun = function sun(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-sun ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '5' }),
		React.createElement('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
		React.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
		React.createElement('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
		React.createElement('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
		React.createElement('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
		React.createElement('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
		React.createElement('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
		React.createElement('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
	);
};

sun.propTypes = propTypes;
sun.defaultProps = defaultProps;

var sunrise = function sunrise(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-sunrise ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M17 18a5 5 0 0 0-10 0' }),
		React.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '9' }),
		React.createElement('line', { x1: '4.22', y1: '10.22', x2: '5.64', y2: '11.64' }),
		React.createElement('line', { x1: '1', y1: '18', x2: '3', y2: '18' }),
		React.createElement('line', { x1: '21', y1: '18', x2: '23', y2: '18' }),
		React.createElement('line', { x1: '18.36', y1: '11.64', x2: '19.78', y2: '10.22' }),
		React.createElement('line', { x1: '23', y1: '22', x2: '1', y2: '22' }),
		React.createElement('polyline', { points: '8 6 12 2 16 6' })
	);
};

sunrise.propTypes = propTypes;
sunrise.defaultProps = defaultProps;

var sunset = function sunset(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-sunset ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M17 18a5 5 0 0 0-10 0' }),
		React.createElement('line', { x1: '12', y1: '9', x2: '12', y2: '2' }),
		React.createElement('line', { x1: '4.22', y1: '10.22', x2: '5.64', y2: '11.64' }),
		React.createElement('line', { x1: '1', y1: '18', x2: '3', y2: '18' }),
		React.createElement('line', { x1: '21', y1: '18', x2: '23', y2: '18' }),
		React.createElement('line', { x1: '18.36', y1: '11.64', x2: '19.78', y2: '10.22' }),
		React.createElement('line', { x1: '23', y1: '22', x2: '1', y2: '22' }),
		React.createElement('polyline', { points: '16 5 12 9 8 5' })
	);
};

sunset.propTypes = propTypes;
sunset.defaultProps = defaultProps;

var tablet = function tablet(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-tablet ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2', ry: '2', transform: 'rotate(180 12 12)' }),
		React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '18' })
	);
};

tablet.propTypes = propTypes;
tablet.defaultProps = defaultProps;

var tag = function tag(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-tag ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' }),
		React.createElement('line', { x1: '7', y1: '7', x2: '7', y2: '7' })
	);
};

tag.propTypes = propTypes;
tag.defaultProps = defaultProps;

var target = function target(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-target ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '6' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '2' })
	);
};

target.propTypes = propTypes;
target.defaultProps = defaultProps;

var terminal = function terminal(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-terminal ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '4 17 10 11 4 5' }),
		React.createElement('line', { x1: '12', y1: '19', x2: '20', y2: '19' })
	);
};

terminal.propTypes = propTypes;
terminal.defaultProps = defaultProps;

var thermometer = function thermometer(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-thermometer ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z' })
	);
};

thermometer.propTypes = propTypes;
thermometer.defaultProps = defaultProps;

var thumbsDown = function thumbsDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-thumbs-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17' })
	);
};

thumbsDown.propTypes = propTypes;
thumbsDown.defaultProps = defaultProps;

var thumbsUp = function thumbsUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-thumbs-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' })
	);
};

thumbsUp.propTypes = propTypes;
thumbsUp.defaultProps = defaultProps;

var toggleLeft = function toggleLeft(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-toggle-left ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '1', y: '5', width: '22', height: '14', rx: '7', ry: '7' }),
		React.createElement('circle', { cx: '8', cy: '12', r: '3' })
	);
};

toggleLeft.propTypes = propTypes;
toggleLeft.defaultProps = defaultProps;

var toggleRight = function toggleRight(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-toggle-right ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '1', y: '5', width: '22', height: '14', rx: '7', ry: '7' }),
		React.createElement('circle', { cx: '16', cy: '12', r: '3' })
	);
};

toggleRight.propTypes = propTypes;
toggleRight.defaultProps = defaultProps;

var trash2 = function trash2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-trash-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '3 6 5 6 21 6' }),
		React.createElement('path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }),
		React.createElement('line', { x1: '10', y1: '11', x2: '10', y2: '17' }),
		React.createElement('line', { x1: '14', y1: '11', x2: '14', y2: '17' })
	);
};

trash2.propTypes = propTypes;
trash2.defaultProps = defaultProps;

var trash = function trash(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-trash ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '3 6 5 6 21 6' }),
		React.createElement('path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' })
	);
};

trash.propTypes = propTypes;
trash.defaultProps = defaultProps;

var trello = function trello(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-trello ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('rect', { x: '7', y: '7', width: '3', height: '9' }),
		React.createElement('rect', { x: '14', y: '7', width: '3', height: '5' })
	);
};

trello.propTypes = propTypes;
trello.defaultProps = defaultProps;

var trendingDown = function trendingDown(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-trending-down ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '23 18 13.5 8.5 8.5 13.5 1 6' }),
		React.createElement('polyline', { points: '17 18 23 18 23 12' })
	);
};

trendingDown.propTypes = propTypes;
trendingDown.defaultProps = defaultProps;

var trendingUp = function trendingUp(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-trending-up ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
		React.createElement('polyline', { points: '17 6 23 6 23 12' })
	);
};

trendingUp.propTypes = propTypes;
trendingUp.defaultProps = defaultProps;

var triangle = function triangle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-triangle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' })
	);
};

triangle.propTypes = propTypes;
triangle.defaultProps = defaultProps;

var truck = function truck(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-truck ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '1', y: '3', width: '15', height: '13' }),
		React.createElement('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
		React.createElement('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
		React.createElement('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
	);
};

truck.propTypes = propTypes;
truck.defaultProps = defaultProps;

var tv = function tv(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-tv ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '2', y: '7', width: '20', height: '15', rx: '2', ry: '2' }),
		React.createElement('polyline', { points: '17 2 12 7 7 2' })
	);
};

tv.propTypes = propTypes;
tv.defaultProps = defaultProps;

var twitter = function twitter(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-twitter ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' })
	);
};

twitter.propTypes = propTypes;
twitter.defaultProps = defaultProps;

var type = function type(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-type ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '4 7 4 4 20 4 20 7' }),
		React.createElement('line', { x1: '9', y1: '20', x2: '15', y2: '20' }),
		React.createElement('line', { x1: '12', y1: '4', x2: '12', y2: '20' })
	);
};

type.propTypes = propTypes;
type.defaultProps = defaultProps;

var umbrella = function umbrella(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-umbrella ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7' })
	);
};

umbrella.propTypes = propTypes;
umbrella.defaultProps = defaultProps;

var underline = function underline(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-underline ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3' }),
		React.createElement('line', { x1: '4', y1: '21', x2: '20', y2: '21' })
	);
};

underline.propTypes = propTypes;
underline.defaultProps = defaultProps;

var unlock = function unlock(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-unlock ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
		React.createElement('path', { d: 'M7 11V7a5 5 0 0 1 9.9-1' })
	);
};

unlock.propTypes = propTypes;
unlock.defaultProps = defaultProps;

var uploadCloud = function uploadCloud(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-upload-cloud ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '16 16 12 12 8 16' }),
		React.createElement('line', { x1: '12', y1: '12', x2: '12', y2: '21' }),
		React.createElement('path', { d: 'M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3' }),
		React.createElement('polyline', { points: '16 16 12 12 8 16' })
	);
};

uploadCloud.propTypes = propTypes;
uploadCloud.defaultProps = defaultProps;

var upload = function upload(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-upload ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
		React.createElement('polyline', { points: '17 8 12 3 7 8' }),
		React.createElement('line', { x1: '12', y1: '3', x2: '12', y2: '15' })
	);
};

upload.propTypes = propTypes;
upload.defaultProps = defaultProps;

var userCheck = function userCheck(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-user-check ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '8.5', cy: '7', r: '4' }),
		React.createElement('polyline', { points: '17 11 19 13 23 9' })
	);
};

userCheck.propTypes = propTypes;
userCheck.defaultProps = defaultProps;

var userMinus = function userMinus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-user-minus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '8.5', cy: '7', r: '4' }),
		React.createElement('line', { x1: '23', y1: '11', x2: '17', y2: '11' })
	);
};

userMinus.propTypes = propTypes;
userMinus.defaultProps = defaultProps;

var userPlus = function userPlus(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-user-plus ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '8.5', cy: '7', r: '4' }),
		React.createElement('line', { x1: '20', y1: '8', x2: '20', y2: '14' }),
		React.createElement('line', { x1: '23', y1: '11', x2: '17', y2: '11' })
	);
};

userPlus.propTypes = propTypes;
userPlus.defaultProps = defaultProps;

var userX = function userX(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-user-x ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '8.5', cy: '7', r: '4' }),
		React.createElement('line', { x1: '18', y1: '8', x2: '23', y2: '13' }),
		React.createElement('line', { x1: '23', y1: '8', x2: '18', y2: '13' })
	);
};

userX.propTypes = propTypes;
userX.defaultProps = defaultProps;

var user = function user(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-user ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '12', cy: '7', r: '4' })
	);
};

user.propTypes = propTypes;
user.defaultProps = defaultProps;

var users = function users(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-users ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
		React.createElement('circle', { cx: '9', cy: '7', r: '4' }),
		React.createElement('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
		React.createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
	);
};

users.propTypes = propTypes;
users.defaultProps = defaultProps;

var videoOff = function videoOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-video-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

videoOff.propTypes = propTypes;
videoOff.defaultProps = defaultProps;

var video = function video(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-video ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '23 7 16 12 23 17 23 7' }),
		React.createElement('rect', { x: '1', y: '5', width: '15', height: '14', rx: '2', ry: '2' })
	);
};

video.propTypes = propTypes;
video.defaultProps = defaultProps;

var voicemail = function voicemail(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-voicemail ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '5.5', cy: '11.5', r: '4.5' }),
		React.createElement('circle', { cx: '18.5', cy: '11.5', r: '4.5' }),
		React.createElement('line', { x1: '5.5', y1: '16', x2: '18.5', y2: '16' })
	);
};

voicemail.propTypes = propTypes;
voicemail.defaultProps = defaultProps;

var volume1 = function volume1(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-volume-1 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }),
		React.createElement('path', { d: 'M15.54 8.46a5 5 0 0 1 0 7.07' })
	);
};

volume1.propTypes = propTypes;
volume1.defaultProps = defaultProps;

var volume2 = function volume2(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-volume-2 ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }),
		React.createElement('path', { d: 'M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' })
	);
};

volume2.propTypes = propTypes;
volume2.defaultProps = defaultProps;

var volumeX = function volumeX(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-volume-x ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }),
		React.createElement('line', { x1: '23', y1: '9', x2: '17', y2: '15' }),
		React.createElement('line', { x1: '17', y1: '9', x2: '23', y2: '15' })
	);
};

volumeX.propTypes = propTypes;
volumeX.defaultProps = defaultProps;

var volume = function volume(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-volume ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' })
	);
};

volume.propTypes = propTypes;
volume.defaultProps = defaultProps;

var watch = function watch(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-watch ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '7' }),
		React.createElement('polyline', { points: '12 9 12 12 13.5 13.5' }),
		React.createElement('path', { d: 'M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83' })
	);
};

watch.propTypes = propTypes;
watch.defaultProps = defaultProps;

var wifiOff = function wifiOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-wifi-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' }),
		React.createElement('path', { d: 'M16.72 11.06A10.94 10.94 0 0 1 19 12.55' }),
		React.createElement('path', { d: 'M5 12.55a10.94 10.94 0 0 1 5.17-2.39' }),
		React.createElement('path', { d: 'M10.71 5.05A16 16 0 0 1 22.58 9' }),
		React.createElement('path', { d: 'M1.42 9a15.91 15.91 0 0 1 4.7-2.88' }),
		React.createElement('path', { d: 'M8.53 16.11a6 6 0 0 1 6.95 0' }),
		React.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '20' })
	);
};

wifiOff.propTypes = propTypes;
wifiOff.defaultProps = defaultProps;

var wifi = function wifi(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-wifi ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M5 12.55a11 11 0 0 1 14.08 0' }),
		React.createElement('path', { d: 'M1.42 9a16 16 0 0 1 21.16 0' }),
		React.createElement('path', { d: 'M8.53 16.11a6 6 0 0 1 6.95 0' }),
		React.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '20' })
	);
};

wifi.propTypes = propTypes;
wifi.defaultProps = defaultProps;

var wind = function wind(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-wind ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2' })
	);
};

wind.propTypes = propTypes;
wind.defaultProps = defaultProps;

var xCircle = function xCircle(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-x-circle ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '9', y2: '15' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '15', y2: '15' })
	);
};

xCircle.propTypes = propTypes;
xCircle.defaultProps = defaultProps;

var xOctagon = function xOctagon(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-x-octagon ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '9', y2: '15' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '15', y2: '15' })
	);
};

xOctagon.propTypes = propTypes;
xOctagon.defaultProps = defaultProps;

var xSquare = function xSquare(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-x-square ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
		React.createElement('line', { x1: '9', y1: '9', x2: '15', y2: '15' }),
		React.createElement('line', { x1: '15', y1: '9', x2: '9', y2: '15' })
	);
};

xSquare.propTypes = propTypes;
xSquare.defaultProps = defaultProps;

var x = function x(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-x ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
		React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
	);
};

x.propTypes = propTypes;
x.defaultProps = defaultProps;

var youtube = function youtube(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-youtube ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('path', { d: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' }),
		React.createElement('polygon', { points: '9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' })
	);
};

youtube.propTypes = propTypes;
youtube.defaultProps = defaultProps;

var zapOff = function zapOff(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-zap-off ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polyline', { points: '12.41 6.75 13 2 10.57 4.92' }),
		React.createElement('polyline', { points: '18.57 12.91 21 10 15.66 10' }),
		React.createElement('polyline', { points: '8 8 3 14 12 14 11 22 16 16' }),
		React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
	);
};

zapOff.propTypes = propTypes;
zapOff.defaultProps = defaultProps;

var zap = function zap(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-zap ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
	);
};

zap.propTypes = propTypes;
zap.defaultProps = defaultProps;

var zoomIn = function zoomIn(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-zoom-in ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
		React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' }),
		React.createElement('line', { x1: '11', y1: '8', x2: '11', y2: '14' }),
		React.createElement('line', { x1: '8', y1: '11', x2: '14', y2: '11' })
	);
};

zoomIn.propTypes = propTypes;
zoomIn.defaultProps = defaultProps;

var zoomOut = function zoomOut(props) {
	var size = props.size,
	    color = props.color,
	    thickness = props.thickness,
	    ends = props.ends,
	    joins = props.joins,
	    className = props.className,
	    restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);

	var iconClassName = 'feather feather-zoom-out ' + (className || '');

	return React.createElement(
		'svg',
		_extends({}, svgProps, {
			width: size,
			height: size,
			stroke: color,
			strokeWidth: thickness,
			strokeLinecap: ends,
			strokeLinejoin: joins,
			className: iconClassName
		}, restProps),
		React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
		React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' }),
		React.createElement('line', { x1: '8', y1: '11', x2: '14', y2: '11' })
	);
};

zoomOut.propTypes = propTypes;
zoomOut.defaultProps = defaultProps;

var icons = {
	activity: activity,
	airplay: airplay,
	alertCircle: alertCircle,
	alertOctagon: alertOctagon,
	alertTriangle: alertTriangle,
	alignCenter: alignCenter,
	alignJustify: alignJustify,
	alignLeft: alignLeft,
	alignRight: alignRight,
	anchor: anchor,
	aperture: aperture,
	archive: archive,
	arrowDownCircle: arrowDownCircle,
	arrowDownLeft: arrowDownLeft,
	arrowDownRight: arrowDownRight,
	arrowDown: arrowDown,
	arrowLeftCircle: arrowLeftCircle,
	arrowLeft: arrowLeft,
	arrowRightCircle: arrowRightCircle,
	arrowRight: arrowRight,
	arrowUpCircle: arrowUpCircle,
	arrowUpLeft: arrowUpLeft,
	arrowUpRight: arrowUpRight,
	arrowUp: arrowUp,
	atSign: atSign,
	award: award,
	barChart2: barChart2,
	barChart: barChart,
	batteryCharging: batteryCharging,
	battery: battery,
	bellOff: bellOff,
	bell: bell,
	bluetooth: bluetooth,
	bold: bold,
	bookOpen: bookOpen,
	book: book,
	bookmark: bookmark,
	box: box,
	briefcase: briefcase,
	calendar: calendar,
	cameraOff: cameraOff,
	camera: camera,
	cast: cast,
	checkCircle: checkCircle,
	checkSquare: checkSquare,
	check: check,
	chevronDown: chevronDown,
	chevronLeft: chevronLeft,
	chevronRight: chevronRight,
	chevronUp: chevronUp,
	chevronsDown: chevronsDown,
	chevronsLeft: chevronsLeft,
	chevronsRight: chevronsRight,
	chevronsUp: chevronsUp,
	chrome: chrome,
	circle: circle,
	clipboard: clipboard,
	clock: clock,
	cloudDrizzle: cloudDrizzle,
	cloudLightning: cloudLightning,
	cloudOff: cloudOff,
	cloudRain: cloudRain,
	cloudSnow: cloudSnow,
	cloud: cloud,
	code: code,
	codepen: codepen,
	coffee: coffee,
	command: command,
	compass: compass,
	copy: copy,
	cornerDownLeft: cornerDownLeft,
	cornerDownRight: cornerDownRight,
	cornerLeftDown: cornerLeftDown,
	cornerLeftUp: cornerLeftUp,
	cornerRightDown: cornerRightDown,
	cornerRightUp: cornerRightUp,
	cornerUpLeft: cornerUpLeft,
	cornerUpRight: cornerUpRight,
	cpu: cpu,
	creditCard: creditCard,
	crop: crop,
	crosshair: crosshair,
	database: database,
	remove: remove,
	disc: disc,
	dollarSign: dollarSign,
	downloadCloud: downloadCloud,
	download: download,
	droplet: droplet,
	edit2: edit2,
	edit3: edit3,
	edit: edit,
	externalLink: externalLink,
	eyeOff: eyeOff,
	eye: eye,
	facebook: facebook,
	fastForward: fastForward,
	feather: feather,
	figma: figma,
	fileMinus: fileMinus,
	filePlus: filePlus,
	fileText: fileText,
	file: file,
	film: film,
	filter: filter,
	flag: flag,
	folderMinus: folderMinus,
	folderPlus: folderPlus,
	folder: folder,
	frown: frown,
	gift: gift,
	gitBranch: gitBranch,
	gitCommit: gitCommit,
	gitMerge: gitMerge,
	gitPullRequest: gitPullRequest,
	github: github,
	gitlab: gitlab,
	globe: globe,
	grid: grid,
	hardDrive: hardDrive,
	hash: hash,
	headphones: headphones,
	heart: heart,
	helpCircle: helpCircle,
	home: home,
	image: image,
	inbox: inbox,
	info: info,
	instagram: instagram,
	italic: italic,
	key: key,
	layers: layers,
	layout: layout,
	lifeBuoy: lifeBuoy,
	link2: link2,
	link: link,
	linkedin: linkedin,
	list: list,
	loader: loader,
	lock: lock,
	logIn: logIn,
	logOut: logOut,
	mail: mail,
	mapPin: mapPin,
	map: map,
	maximize2: maximize2,
	maximize: maximize,
	meh: meh,
	menu: menu,
	messageCircle: messageCircle,
	messageSquare: messageSquare,
	micOff: micOff,
	mic: mic,
	minimize2: minimize2,
	minimize: minimize,
	minusCircle: minusCircle,
	minusSquare: minusSquare,
	minus: minus,
	monitor: monitor,
	moon: moon,
	moreHorizontal: moreHorizontal,
	moreVertical: moreVertical,
	mousePointer: mousePointer,
	move: move,
	music: music,
	navigation2: navigation2,
	navigation: navigation,
	octagon: octagon,
	packageIcon: packageIcon,
	paperclip: paperclip,
	pauseCircle: pauseCircle,
	pause: pause,
	penTool: penTool,
	percent: percent,
	phoneCall: phoneCall,
	phoneForwarded: phoneForwarded,
	phoneIncoming: phoneIncoming,
	phoneMissed: phoneMissed,
	phoneOff: phoneOff,
	phoneOutgoing: phoneOutgoing,
	phone: phone,
	pieChart: pieChart,
	playCircle: playCircle,
	play: play,
	plusCircle: plusCircle,
	plusSquare: plusSquare,
	plus: plus,
	pocket: pocket,
	power: power,
	printer: printer,
	radio: radio,
	refreshCcw: refreshCcw,
	refreshCw: refreshCw,
	repeat: repeat,
	rewind: rewind,
	rotateCcw: rotateCcw,
	rotateCw: rotateCw,
	rss: rss,
	save: save,
	scissors: scissors,
	search: search,
	send: send,
	server: server,
	settings: settings,
	share2: share2,
	share: share,
	shieldOff: shieldOff,
	shield: shield,
	shoppingBag: shoppingBag,
	shoppingCart: shoppingCart,
	shuffle: shuffle,
	sidebar: sidebar,
	skipBack: skipBack,
	skipForward: skipForward,
	slack: slack,
	slash: slash,
	sliders: sliders,
	smartphone: smartphone,
	smile: smile,
	speaker: speaker,
	square: square,
	star: star,
	stopCircle: stopCircle,
	sun: sun,
	sunrise: sunrise,
	sunset: sunset,
	tablet: tablet,
	tag: tag,
	target: target,
	terminal: terminal,
	thermometer: thermometer,
	thumbsDown: thumbsDown,
	thumbsUp: thumbsUp,
	toggleLeft: toggleLeft,
	toggleRight: toggleRight,
	trash2: trash2,
	trash: trash,
	trello: trello,
	trendingDown: trendingDown,
	trendingUp: trendingUp,
	triangle: triangle,
	truck: truck,
	tv: tv,
	twitter: twitter,
	type: type,
	umbrella: umbrella,
	underline: underline,
	unlock: unlock,
	uploadCloud: uploadCloud,
	upload: upload,
	userCheck: userCheck,
	userMinus: userMinus,
	userPlus: userPlus,
	userX: userX,
	user: user,
	users: users,
	videoOff: videoOff,
	video: video,
	voicemail: voicemail,
	volume1: volume1,
	volume2: volume2,
	volumeX: volumeX,
	volume: volume,
	watch: watch,
	wifiOff: wifiOff,
	wifi: wifi,
	wind: wind,
	xCircle: xCircle,
	xOctagon: xOctagon,
	xSquare: xSquare,
	x: x,
	youtube: youtube,
	zapOff: zapOff,
	zap: zap,
	zoomIn: zoomIn,
	zoomOut: zoomOut
};

var Icon = function Icon(props) {
  var name = props.name,
      restProps = objectWithoutProperties(props, ['name']);

  var IconSVG = icons[name];
  if (!IconSVG) {
    return null;
  }

  return React.createElement(IconSVG, restProps);
};

Icon.propTypes = containerPropTypes;
Icon.defaultProps = defaultProps;

var iconNames = Object.keys(icons);

export default Icon;
export { iconNames };
//# sourceMappingURL=index.es.js.map
