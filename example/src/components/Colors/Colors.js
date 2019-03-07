import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker';
import { Wrapper } from './Colors.style';

const Colors = (props) => {
  const { name, value, onChange } = props;
  const px = `${value}px`;

  return (
    <Wrapper>
      <div className="label">Color</div>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChange({ name, value: target.value })}
      />
      <ColorPicker
        color={value}
        onChange={value => onChange({ name, value })}
      />
    </Wrapper>
  );
}

Colors.propTypes = {
  name     : PropTypes.string.isRequired,
  value    : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
};

export default Colors;
