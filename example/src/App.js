import React, { Component } from 'react'
import { iconNames } from '@daminort/react-feather-icons';

import ControlPanel from './ControlPanel';
import Icons from './Icons';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      size: 24,
    }
  }
  
  onChange(data) {
    console.log('App.js [19], data:', data);
    this.setState(data);
  }

  render () {
    return (
      <div className="page">
        <ControlPanel {...this.state} onChange={this.onChange}/>
        <Icons />
      </div>
    )
  }
}

export default App;