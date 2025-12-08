import HeroInput from '../landing/hero-input';

const FooterCard = () => {
  return (
    <div className="bg-primary-green-600 w-full py-8 md:py-[52px] min-h-[183px] flex justify-between gap-3 md:gap-5 bg-[url('/assets/png/footer-cover.png')] bg-no-repeat bg-right bg-contain">
      <div className="container flex-wrap sm:flex-nowrap px-6 sm:px-10 flex items-center justify-between gap-5">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[482px]">
          <p className="text-primary-blue-500 font-semibold text-[30px] sm:text-[40px] leading-[109%]">
            Subscribe to job alerts
          </p>
          <p className="text-secondary-blue-900 text-sm leading-[109%]">
            We’ll let you know if anything’s up for grabs.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 justify-between sm:h-full item-start sm:items-end">
          <HeroInput
            mode="dark"
            className="md:min-w-[516px] max-w-[516px] py-2 pl-3 sm:pl-4"
            suffixIcon
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
