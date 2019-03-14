import React, { PureComponent } from 'react';

import { Consumer } from '../../context';
import { InputSearch } from '../../components/antd';
import { Wrapper } from './TopBar.style';

class TopBar extends PureComponent {

  renderSearch(props) {
    const { search, onChangeValue } = props;

    return (
      <InputSearch
        placeholder="Search for an icon"
        value={search}
        onChange={({ target }) => onChangeValue({ name: 'search', value: target.value })}
      />
    )
  }

  render() {

    return (
      <Consumer>
        {(props) => (
          <Wrapper className="top-bar">
            <div className="top">
              <div className="logo">REACT-FEATHER-ICONS</div>
              {this.renderSearch(props)}
              <div className="links">
                <a href="https://github.com/daminort/react-feather-icons">GitHub</a>
                <a href="https://iconsvg.xyz" target="_blank">iconsvg.xyz</a>
                <a href="https://feathericons.com" target="_blank">Feather Icons</a>
              </div>
            </div>
            <div className="bottom">
              Select an icon to get a preview and code example
            </div>
          </Wrapper>
        )}
      </Consumer>
    );
  }
}

export default TopBar;
