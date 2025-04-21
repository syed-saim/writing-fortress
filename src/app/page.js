import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import FourStepsSection from '../components/FourStepsSection';
import ReviewCarousel from '../components/ReviewCarousel';
import QualitySection from '../components/QualityService';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <FourStepsSection />
      <ReviewCarousel />
      <QualitySection />
      <FAQSection />
    </main>
  );
}