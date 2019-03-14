import React from 'react';
import { svgProps } from './props';

const JoinRound = () => {

  return (
    <svg {...svgProps}>
      <g fill="none" fillRule="evenodd">
        <path className="base" fill="#DDD" fillRule="nonzero" d="M9,1.5 L16,1.5 L16,14.5 L2,14.5 L2,8.5 C2,4.63400675 5.13400675,1.5 9,1.5 Z" />
        <path fill="currentColor" fillRule="nonzero" d="M2.96551724,14.5 L2,14.5 L2,7.74 C2,4.29374316 4.80979916,1.5 8.27586207,1.5 L16,1.5 L16,2.46 L8.27586207,2.46 C5.3430396,2.46 2.96551724,4.82393652 2.96551724,7.74 L2.96551724,14.5 Z M10.9369913,9 C10.7561021,9.70280365 10.2028036,10.2561021 9.5,10.4369913 L9.5,14.5 L8.5,14.5 L8.5,10.4369913 C7.63738639,10.2149699 7,9.43191971 7,8.5 C7,7.3954305 7.8954305,6.5 9,6.5 C9.93191971,6.5 10.7149699,7.13738639 10.9369913,8 L16,8 L16,9 L10.9369913,9 Z" />
      </g>
    </svg>
  );
};

export default JoinRound;
