import React from 'react';
import PropTypes from 'prop-types';
import { Slider as AntSlider } from '../antd';
import { Wrapper } from './Slider.style';

const Slider = (props) => {
  const { name, label, min, max, step, value, onChange } = props;
  const px = `${value}px`;

  return (
    <Wrapper>
      <div className="label">{label}</div>
      <AntSlider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={value => onChange({ name, value })}
      />
      <div className="px">{px}</div>
    </Wrapper>
  );
}

Slider.propTypes = {
  name     : PropTypes.string.isRequired,
  label    : PropTypes.string.isRequired,
  min      : PropTypes.number.isRequired,
  max      : PropTypes.number.isRequired,
  step     : PropTypes.number.isRequired,
  val      : PropTypes.number.isRequired,
  onChange : PropTypes.func.isRequired,
};

export default Slider;
