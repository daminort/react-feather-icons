import React from 'react';

import IconBox from '../../components/IconBox';
import { Consumer } from '../../context';
import { Wrapper } from './Preview.style';

const Preview = () => {

  return (
    <Consumer>
      {({ size, thickness, ends, joins, color, selectedIcon }) => (
        <Wrapper className="preview">
          <div className="box">
            <IconBox
              noTitle
              name={selectedIcon}
              size={size}
              thickness={thickness}
              ends={ends}
              joins={joins}
              color={color}
            />
          </div>
        </Wrapper>
      )}
    </Consumer>
  );
}

export default Preview;
