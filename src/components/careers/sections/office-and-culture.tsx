import GrowCard from '@/components/landing/grow-card';
import { OfficeAndCultureData } from '@/mock/officeAndCulture';

const OfficeAndCulture = () => {
  return (
    <div
      id="office-and-culture"
      className="pt-9 container sm:pt-[52px] flex flex-col gap-[30px] sm:gap-[47px] w-full pb-10"
    >
      <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-[568px] sm:mx-auto items-start sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          office & culture
        </h5>
        <p className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          Life at Kurl
        </p>
        <p className="text-[15px] sm:text-center">
          While we make sure our customers have a good time, we make sure that
          our employees gets equally the same.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OfficeAndCultureData.map((item, i) => {
          const Icon = item.icon;
          return (
            <GrowCard
              key={i}
              icon={<Icon />}
              title={item.title}
              description={item.description}
              isRight={(i + 1) % 2 === 1}
              isTop={i === 2 || i === 3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OfficeAndCulture;
