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

var IconSVG = function IconSVG(props) {
  var size = props.size,
      color = props.color,
      thickness = props.thickness,
      ends = props.ends,
      joins = props.joins,
      className = props.className,
      restProps = objectWithoutProperties(props, ['size', 'color', 'thickness', 'ends', 'joins', 'className']);


  return React.createElement(
    'svg',
    _extends({}, svgProps, {
      width: size,
      height: size,
      stroke: color,
      strokeWidth: thickness,
      strokeLinecap: ends,
      strokeLinejoin: joins,
      className: className
    }, restProps),
    React.createElement('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })
  );
};

IconSVG.displayName = 'activity';
IconSVG.propTypes = propTypes;
IconSVG.defaultProps = defaultProps;

var icons = {
  activity: IconSVG
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

/*
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
*/

export default Icon;
//# sourceMappingURL=index.es.js.map
