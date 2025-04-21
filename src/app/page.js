import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import FourStepsSection from '../components/FourStepsSection';
import ReviewCarousel from '../components/ReviewCarousel';
import QualitySection from '../components/QualityService';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <FourStepsSection />
      <ReviewCarousel />
      <QualitySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}