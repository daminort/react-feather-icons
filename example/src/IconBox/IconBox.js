import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@daminort/react-feather-icons';

class IconBox extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  }
  
  render () {
    const { name } = this.props;

    return (
      <div className="box">
        <div className="icon">
          <Icon name={name} />
        </div>
        {<div className="title">{name}</div>}
      </div>
    )
  }
}

export default IconBox;
