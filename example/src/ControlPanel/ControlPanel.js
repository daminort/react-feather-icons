import React, { Component } from 'react';

import Slider from '../components/Slider';
import Switcher from '../components/Switcher';
import Colors from '../components/Colors';
import Preview from '../components/Preview';

import { Consumer } from '../context';
import { Wrapper } from './ControlPanel.style';

class ControlPanel extends Component {

  renderSliders(props) {
    const { size, thickness, onChangeValue } = props;

    return (
      <div className="sliders">
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
      </div>
    )
  }

  renderSwitchers(props) {
    const { ends, joins, onChangeValue } = props;

    return (
      <div className="switchers">
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
      </div>
    );
  }

  renderColors(props) {
    const { color, onChangeValue } = props;

    return (
      <div className="colors">
        <div className="row">
          <Colors
            name="color"
            value={color}
            onChange={onChangeValue}
          />
        </div>
        <div className="row" />
      </div>
    );
  }

  render() {
    return (
      <Consumer>
        {(props) => (
          <Wrapper>
            <h4>Settings</h4>
            <div className="blocks">
              <div className="settings">
                {this.renderSliders(props)}
                {this.renderSwitchers(props)}
                {this.renderColors(props)}
              </div>
              <div className="preview">
                <Preview />
              </div>
            </div>
          </Wrapper>
        )}
      </Consumer>
    );
  }
}

export default ControlPanel;
