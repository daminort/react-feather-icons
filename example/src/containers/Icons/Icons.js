import React, { PureComponent } from 'react'
import { iconNames } from '@daminort/react-feather-icons';

import { Consumer } from '../../context';
import IconBox from '../../components/IconBox';

import { Wrapper } from './Icons.style';
import { groups } from './groups';

class Icons extends PureComponent {

  renderSearchResults(props) {
    const { selectedIcon, search, onChangeValue } = props;
    const regExp = new RegExp(search, 'g');
    const filteredIcons = iconNames.filter(name => {
      return regExp.test(name);
    });

    const result = filteredIcons.map(name => (
      <IconBox
        key={name}
        name={name}
        active={name === selectedIcon}
        onClick={() => onChangeValue({ name: 'selectedIcon', value: name })}
      />
    ));

    return (
      <div className="unordered">
        {result}
      </div>
    )
  }

  renderIcons(props) {
    const { selectedIcon, search, onChangeValue } = props;
    if (search) {
      return this.renderSearchResults(props);
    }

    const result    = [];
    const usedIcons = [];

    Object.keys(groups).forEach(groupName => {
      const iconNames = groups[groupName];
      const icons = iconNames.map(name => {
        usedIcons.push(name);
        return (
          <IconBox
            key={name}
            name={name}
            active={name === selectedIcon}
            onClick={() => onChangeValue({ name: 'selectedIcon', value: name })}
          />
        );
      });

      result.push((
        <div className="group" key={groupName}>
          <h4>{groupName}</h4>
          <div className="icons">{icons}</div>
        </div>
      ));
    });

    const othersNames = iconNames.filter(name => !usedIcons.includes(name));
    const othersIcons = othersNames.map(name => {
      return (
        <IconBox
          key={name}
          name={name}
          active={name === selectedIcon}
          onClick={() => onChangeValue({ name: 'selectedIcon', value: name })}
        />
      );
    });

    result.push((
      <div className="group" key="others">
        <h4>Others</h4>
        <div className="icons">{othersIcons}</div>
      </div>
    ));

    return (
      <div className="ordered">{result}</div>
    );
  }

  render() {
    return (
      <Consumer>
        {(props) => (
          <Wrapper className="content">
            {this.renderIcons(props)}
          </Wrapper>
        )}
      </Consumer>
    )
  }
}

export default Icons;
