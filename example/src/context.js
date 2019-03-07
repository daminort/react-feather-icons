import React from 'react';

const initState = {
  size         : 24,
  thickness    : 2,
  ends         : 'round',
  joins        : 'round',
  color        : '#000000',
  selectedIcon : '',
};

const { Provider, Consumer } = React.createContext(initState);

export {
  Provider,
  Consumer,
  initState,
};
