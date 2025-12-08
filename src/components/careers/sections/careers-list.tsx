import React from 'react';

import { type CareerItem, CareerList } from '@/mock/careerList';

import EmptyCard from '../empty-card';
import PositionCard from '../position-card';

const CareersList = () => {
  return (
    <div className="pt-[60px] pb-[132px] flex flex-col gap-[47px] container">
      <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-[568px] sm:mx-auto items-start sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          careers list
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Open positions
        </p>
      </div>
      <div className="flex flex-col w-full">
        {CareerList.length > 0 ? (
          CareerList.map((career: CareerItem, index: number) => (
            <PositionCard
              key={index}
              title={career.title}
              description={`${career.role} | ${career.location} | ${career.abc}`}
            />
          ))
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default CareersList;
