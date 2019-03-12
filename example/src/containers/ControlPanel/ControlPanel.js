import React, { Component, Fragment } from 'react';

import Slider from '../../components/Slider';
import Switcher from '../../components/Switcher';
import Colors from '../../components/Colors';

import { Consumer } from '../../context';
import { Wrapper } from './ControlPanel.style';

class ControlPanel extends Component {

  renderSliders(props) {
    const { size, thickness, onChangeValue } = props;

    return (
      <Fragment>
        <div className="row">
          <Slider
            name="size"
            label="Icon size"
            min={16}
            max={64}
            step={8}
            value={size}
            onChange={onChangeValue}
          />
        </div>
        <div className="row">
          <Slider
            name="thickness"
            label="Thickness"
            min={1}
            max={8}
            step={1}
            value={thickness}
            onChange={onChangeValue}
          />
        </div>
      </Fragment>
    )
  }

  renderSwitchers(props) {
    const { ends, joins, onChangeValue } = props;

    return (
      <Fragment>
        <div className="row">
          <Switcher
            name="ends"
            label="Ends"
            type="ends"
            value={ends}
            onChange={onChangeValue}
          />
        </div>
        <div className="row">
          <Switcher
            name="joins"
            label="Joins"
            type="joins"
            value={joins}
            onChange={onChangeValue}
          />
        </div>
      </Fragment>
    );
  }

  renderColors(props) {
    const { color, onChangeValue } = props;

    return (
      <div className="row">
        <Colors
          name="color"
          value={color}
          onChange={onChangeValue}
        />
      </div>
    );
  }

  render() {
    return (
      <Consumer>
        {(props) => (
          <Wrapper className="settings">
            {this.renderSliders(props)}
            {this.renderSwitchers(props)}
            {this.renderColors(props)}
          </Wrapper>
        )}
      </Consumer>
    );
  }
}

export default ControlPanel;
