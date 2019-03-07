import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Popover, SketchPicker } from '../antd';
import { Wrapper, Block, Color } from './ColorPicker.style';

class ColorPicker extends Component {

  static propTypes = {
    color    : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onChangeColor(color) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(color.hex);
    }
  }

  render() {
    const { color, disabled } = this.props;
    if (disabled) {
      return (
        <Wrapper>
          <Block>
            <Color value={color} />
          </Block>
        </Wrapper>
      );
    }

    const content = (
      <SketchPicker color={color} onChange={this.onChangeColor} />
    );

    return (
      <Wrapper>
        <Popover placement="rightTop" content={content} trigger="click">
          <Block>
            <Color value={color} />
          </Block>
        </Popover>
      </Wrapper>
    );
  }
}

export default ColorPicker;
