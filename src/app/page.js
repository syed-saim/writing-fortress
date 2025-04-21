import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import FourStepsSection from '../components/FourStepsSection';
import ReviewCarousel from '../components/ReviewCarousel';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <FourStepsSection />
      <ReviewCarousel />
      <FAQSection />
    </main>
  );
}