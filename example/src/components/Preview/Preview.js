import React from 'react';

import IconBox from '../../IconBox';
import { Consumer } from '../../context';
import { Wrapper } from './Preview.style';

const Preview = () => {

  return (
    <Consumer>
      {(props) => (
        <Wrapper>
          <IconBox
            name={props.selectedIcon}
            {...props}
          />
        </Wrapper>
      )}
    </Consumer>
  );
}

export default Preview;
