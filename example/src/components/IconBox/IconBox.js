import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@daminort/react-feather-icons';

class IconBox extends Component {

  static propTypes = {
    name    : PropTypes.string.isRequired,
    active  : PropTypes.bool,
    noTitle : PropTypes.bool,
  }

  static defaultProps = {
    active  : false,
    noTitle : false,
  }
  
  render () {
    const { name, noTitle, active, ...restProps } = this.props;
    const className = 'box' + (active ? ' active' : '');

    return (
      <div className={className}>
        <div className="icon">
          <Icon 
            name={name}
            {...restProps}
          />
        </div>
        {!noTitle && (<div className="title">{name}</div>)}
      </div>
    )
  }
}

export default IconBox;
