import React from 'react';
import { svgProps } from './props';

const EndButt = () => {

  return (
    <svg {...svgProps}>
      <rect className="base" width="13" height="12" x="3" y="2" fill="#DDD" fillRule="nonzero" />
      <path fill="currentColor" fillRule="nonzero" d="M3.5,6.06300874 C4.20280365,6.2438979 4.7561021,6.79719635 4.93699126,7.5 L16,7.5 L16,8.5 L4.93699126,8.5 C4.7561021,9.20280365 4.20280365,9.7561021 3.5,9.93699126 L3.5,13.5 L16,13.5 L16,14.5 L2.5,14.5 L2.5,9.93699126 C1.63738639,9.71496986 1,8.93191971 1,8 C1,7.06808029 1.63738639,6.28503014 2.5,6.06300874 L2.5,1.5 L16,1.5 L16,2.5 L3.5,2.5 L3.5,6.06300874 Z" />
    </svg>
  );
};

export default EndButt;
