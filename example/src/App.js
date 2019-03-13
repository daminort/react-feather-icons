import React, { Component } from 'react';
import { iconNames } from '@daminort/react-feather-icons';

import TopBar from './containers/TopBar';
import ControlPanel from './containers/ControlPanel';
import Icons from './containers/Icons';
import Preview from './containers/Preview';
import Code from './containers/Code';

import { Provider, initState } from './context';
import { Wrapper } from './App.style';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state    = initState;
  }

  componentDidMount() {
    const selectedIcon = iconNames.includes('arrowUp') ? 'arrowUp' : iconNames[0];
    this.setState({ selectedIcon });
  }
  
  onChange({ name, value }) {
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render () {
    const contextValue = {
      ...this.state,
      onChangeValue: this.onChange,
    };

    return (
      <Provider value={contextValue}>
        <Wrapper>
          <div className="left">
            <div className="top-bar"><TopBar /></div>
            <div className="content"><Icons /></div>
          </div>
          <div className="right">
            <div className="preview"><Preview /></div>
            <div className="settings"><ControlPanel /></div>
            <div className="code"><Code /></div>
          </div>
        </Wrapper>
      </Provider>
    )
  }
}

export default App;