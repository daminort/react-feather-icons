import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { iconPropTypes, iconDefaultProps } from '../config/props';
import Slider from '../components/Slider';
import { Wrapper } from './ControlPanel.style';

class ControlPanel extends Component {

  static propTypes = {
    ...iconPropTypes,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    ...iconDefaultProps,
  }

  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue({ name, value }) {
    const { onChange } = this.props;
    onChange({
      [name]: value,
    });
  }

  render() {
    const { size, thickness } = this.props;

    return (
      <Wrapper>
        <div className="sliders">
          <Slider
            name="size"
            label="Icon size"
            min={16}
            max={64}
            step={8}
            value={size}
            onChange={this.onChangeValue}
          />
          <Slider
            name="thickness"
            label="Stroke thickness"
            min={1}
            max={8}
            step={1}
            value={thickness}
            onChange={this.onChangeValue}
          />
        </div>
      </Wrapper>
    );
  }
}

export default ControlPanel;
