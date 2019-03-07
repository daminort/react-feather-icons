import React, { Component } from 'react'

import ControlPanel from './ControlPanel';
import Icons from './Icons';

import { Provider, initState } from './context';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state    = initState;
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
        <div className="page">
          <ControlPanel />
          <Icons />
        </div>
      </Provider>
    )
  }
}

export default App;