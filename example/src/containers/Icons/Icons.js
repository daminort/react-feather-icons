import React, { PureComponent } from 'react'
import { iconNames } from '@daminort/react-feather-icons';

import { Consumer } from '../../context';
import IconBox from '../../components/IconBox';
import { Wrapper } from './Icons.style';

class Icons extends PureComponent {

  renderSearchResults(props) {
    const { selectedIcon, search, onChangeValue } = props;
    const regExp = new RegExp(search, 'g');
    const filteredIcons = iconNames.filter(name => {
      return regExp.test(name);
    });

    return filteredIcons.map(name => (
      <IconBox
        key={name}
        name={name}
        active={name === selectedIcon}
        onClick={() => onChangeValue({ name: 'selectedIcon', value: name })}
      />
    ));
  }

  renderIcons(props) {
    const { selectedIcon, search, onChangeValue } = props;
    if (search) {
      return this.renderSearchResults(props);
    }

    const icons = iconNames.map(name => {
      return (
        <IconBox
          key={name}
          name={name}
          active={name === selectedIcon}
          onClick={() => onChangeValue({ name: 'selectedIcon', value: name })}
        />
      );
    });

    return icons;
  }

  render() {
    return (
      <Consumer>
        {(props) => (
          <Wrapper className="section-icons">
            {this.renderIcons(props)}
          </Wrapper>
        )}
      </Consumer>
    )
  }
}

export default Icons;
