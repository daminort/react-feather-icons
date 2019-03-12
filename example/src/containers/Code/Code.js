import React from 'react';

import { Consumer } from '../../context';
import { Wrapper } from './Code.style';

const renderContent = (props) => {
  
  const result = 
`
import React from 'react';
import Icon from '@daminort/react-feather-icons';

const CustomIcon = () => (
  <Icon
    name="${props.selectedIcon}"
    size="${props.size}"
    thickness="${props.thickness}"
    ends="${props.ends}"
    joins="${props.joins}"
    color="${props.color}"
  />
);

export default CustomIcon;

`;

  return result;
}

const Code = () => {

  return (
    <Consumer>
      {(props) => (
        <Wrapper className="code">
          <pre className="content">
            {renderContent(props)}
          </pre>
        </Wrapper>
      )}
    </Consumer>
  );
}

export default Code;
