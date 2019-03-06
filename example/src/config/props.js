import PropTypes from 'prop-types';

// Icons props
export const iconPropTypes = {
  size      : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color     : PropTypes.string,
  thickness : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ends      : PropTypes.oneOf(['butt', 'round', 'square']),
  joins     : PropTypes.oneOf(['bevel', 'round', 'arcs']),
};

export const iconDefaultProps = {
  size      : 24,
  color     : 'currentColor',
  thickness : 2,
  ends      : 'round',
  joins     : 'round',
};
