import Image from 'next/image';
import React from 'react';

import Button from '@/components/shared/button';

const Banner = () => {
  return (
    <div className="flex flex-col gap-[52px]">
      <span className="relative block">
        <Image
          alt="banner"
          src="/assets/png/career-banner.png"
          height={382}
          width={1440}
          className="grayscale rounded-lg"
        />
        <span className="absolute inset-0 rounded-lg bg-linear-to-r from-[#11141C]/80 to-[#11141C]/0" />
      </span>
      <div
        className="absolute top-[55%] right-0 h-[670px] w-[670px] rounded-full 
  bg-[url('/assets/svg/career-gradient.svg')]
  bg-no-repeat bg-cover bg-center
  blur-[15px] z-0"
      />
      <div className="flex gap-6 container">
        <div className="flex flex-col gap-8">
          <h1 className="text-[71px] leading-[101%]">
            Craft the future of fitness & business
            <span className="text-primary-green-500">.</span>{' '}
          </h1>
          <Button className="w-fit">See open positions</Button>
        </div>
        <p className="text-[16px] max-w-[497px]">
          At Kurl Club, we don’t believe work should be meaningful and
          delightful, something that replenish our souls instead of draining it.
          If you’re a misfit, a rebel a dreamer, and like to bring meaning to
          your life, instead of needless, mindless toil, come join our team of
          pirates.
        </p>
      </div>
    </div>
  );
};

export default Banner;
