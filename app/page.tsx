import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { CTAStrip } from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialSlider />
      <CTAStrip />
    </>
  );
}