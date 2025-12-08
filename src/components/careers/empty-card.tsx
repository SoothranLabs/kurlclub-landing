import Image from 'next/image';
import React from 'react';

const EmptyCard = () => {
  return (
    <div className="h-[348px] bg-secondary-blue-500 rounded-l-lg flex flex-col justify-center items-center gap-4">
      <Image src={'/assets/svg/oops.svg'} alt="oops" width={340} height={135} />
      <span className="text-primary-blue-50 font-medium text-[28px] leading-[109%] max-w-[340px] text-center">
        We have no open positions at the moment
      </span>
    </div>
  );
};

export default EmptyCard;
