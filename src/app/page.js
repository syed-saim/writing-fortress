import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import FourStepsSection from '../components/FourStepsSection';
import ReviewCarousel from '../components/ReviewCarousel';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <FourStepsSection />
      <ReviewCarousel />
    </main>
  );
}