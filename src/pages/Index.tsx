import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FeaturedSchools } from '@/components/home/FeaturedSchools';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <FeaturedSchools />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
