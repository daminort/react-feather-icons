import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../../svg';
import { Wrapper } from './Switcher.style';

const ends  = ['butt', 'round', 'square'];
const joins = ['bevel', 'round', 'arcs'];

const endsSVG = {
  0 : SVG.EndButt,
  1 : SVG.EndRound,
  2 : SVG.EndSquare,
};

const joinsSVG = {
  0 : SVG.JoinBevel,
  1 : SVG.JoinRound,
  2 : SVG.JoinArcs,
};

const Switcher = (props) => {
  const { name, label, type, value, onChange } = props;

  const types = (type === 'ends') ? ends    : joins;
  const icons = (type === 'ends') ? endsSVG : joinsSVG;

  const buttons = types.map((typeName, index) => {
    const className = `button-${index} ${typeName === value ? 'active' : ''}`;
    const Icon = icons[index];

    return (
      <button
        key={typeName}
        className={className}
        onClick={() => onChange({ name, value: typeName })}
      >
        <Icon />
      </button>
    );
  });

  return (
    <Wrapper>
      <div className="label">{label}</div>
      <div className="buttons">{buttons}</div>
    </Wrapper>
  );
}

Switcher.propTypes = {
  name     : PropTypes.string.isRequired,
  label    : PropTypes.string.isRequired,
  type     : PropTypes.oneOf(['ends', 'joins']).isRequired,
  value    : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
};

export default Switcher;
