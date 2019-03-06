import React, { Component } from 'react'
import { iconNames } from '@daminort/react-feather-icons';

import IconBox from '../IconBox';
import { Wrapper } from './Icons.style';

const Icons = () => {

  const icons = iconNames.map(name => (
    <IconBox key={name} name={name} />
  ));

  return (
    <Wrapper>
      {icons}
    </Wrapper>
  );
}

export default Icons;
