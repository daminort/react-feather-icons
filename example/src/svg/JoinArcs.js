import React from 'react';
import { svgProps } from './props';

const JoinArcs = () => {

  return (
    <svg {...svgProps}>
      <g fill="none" fillRule="evenodd">
        <rect className="base" width="14" height="13" x="2" y="1.5" fill="#DDD" fillRule="nonzero" />
        <path fill="currentColor" fillRule="nonzero" d="M10.9369913,9 C10.7561021,9.70280365 10.2028036,10.2561021 9.5,10.4369913 L9.5,14.5 L8.5,14.5 L8.5,10.4369913 C7.63738639,10.2149699 7,9.43191971 7,8.5 C7,7.3954305 7.8954305,6.5 9,6.5 C9.93191971,6.5 10.7149699,7.13738639 10.9369913,8 L16,8 L16,9 L10.9369913,9 Z M3,2.5 L3,14.5 L2,14.5 L2,1.5 L16,1.5 L16,2.5 L3,2.5 Z" />
      </g>
    </svg>
  );
};

export default JoinArcs;
