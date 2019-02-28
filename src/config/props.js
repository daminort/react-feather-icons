import PropTypes from 'prop-types';

// Icons props
export const propTypes = {
  size      : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color     : PropTypes.string,
  thickness : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ends      : PropTypes.oneOf(['butt', 'round', 'square']),
  joins     : PropTypes.oneOf(['bevel', 'round', 'arcs']),
  className : PropTypes.string,
};

export const defaultProps = {
  size      : 24,
  color     : 'currentColor',
  thickness : 2,
  ends      : 'round',
  joins     : 'round',
  className : null,
};

// Container props
export const containerPropTypes = {
  ...propTypes,
  name: PropTypes.string.isRequired,
};

// Common SVG props
export const svgProps = {
  xmlns   : 'http://www.w3.org/2000/svg',
  viewBox : '0 0 24 24',
  fill    : 'none',
};
