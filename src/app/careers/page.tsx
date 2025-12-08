import FeatureCard from '@/components/careers/feature-card';
import Banner from '@/components/careers/sections/banner';
import CareersList from '@/components/careers/sections/careers-list';
import OfficeAndCulture from '@/components/careers/sections/office-and-culture';
import Footer from '@/components/shared/footer';

const CareersPage = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center mt-[180px]">
      <Banner />
      <OfficeAndCulture />
      <CareersList />
      <FeatureCard />
      <Footer />
    </div>
  );
};

export default CareersPage;
