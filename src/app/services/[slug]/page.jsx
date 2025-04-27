import { notFound } from 'next/navigation';
import Link from 'next/link';

const serviceContent = {
    'article-writing': {
      heading: 'Professional Article Writing',
      subheading: 'We craft informative, engaging, and SEO-optimized articles that enhance your brand authority and captivate your audience across various industries.',
    },
    'audio-book': {
      heading: 'High-Quality Audio Book Services',
      subheading: 'Transform your stories into immersive audio experiences with our professional narrators and sound engineers, ensuring your message resonates.',
    },
    'author-website': {
      heading: 'Author Websites That Inspire',
      subheading: 'We build stunning, responsive websites that showcase your books, engage your readers, and establish a strong online presence for your author brand.',
    },
    'blog-writing': {
      heading: 'Exceptional Blog Writing',
      subheading: 'Our blog writing services deliver fresh, SEO-optimized, and engaging content that boosts your website traffic and builds customer loyalty.',
    },
    'book-cover': {
      heading: 'Eye-Catching Book Cover Designs',
      subheading: 'We create professionally designed book covers that grab attention, convey your story’s essence, and drive more readers to pick up your book.',
    },
    'children-book': {
      heading: "Children's Book Writing",
      subheading: 'Delight young readers with imaginative, educational, and age-appropriate children’s books that spark creativity and foster a love for reading.',
    },
    'e-book-writing': {
      heading: 'Expert E-book Writing',
      subheading: 'We transform your ideas into professionally written and formatted eBooks that expand your reach and authority in the digital publishing space.',
    },
    'editing': {
      heading: 'Professional Editing Services',
      subheading: 'Our editing team ensures your work is polished, coherent, grammatically flawless, and ready to make a lasting impression on your audience.',
    },
    'formating': {
      heading: 'Book Formatting Services',
      subheading: 'We design clean, professional, and platform-specific layouts, ensuring your book looks stunning across Kindle, print, and other formats.',
    },
    'ghostwriting': {
      heading: 'Ghostwriting Excellence',
      subheading: 'Let us bring your ideas to life with high-quality ghostwriting that captures your voice, engages readers, and elevates your story effortlessly.',
    },
    'proofreading': {
      heading: 'Reliable Proofreading',
      subheading: 'Our meticulous proofreading catches every typo, grammar mistake, and formatting error, ensuring your manuscript is publication-ready.',
    },
    'publishing': {
      heading: 'Hassle-Free Publishing',
      subheading: 'From manuscript preparation to final launch, we manage the entire publishing process, helping you reach global audiences with ease.',
    },
    'video-book-trailer': {
      heading: 'Compelling Video Book Trailers',
      subheading: 'We produce dynamic and engaging book trailers that captivate potential readers and effectively market your story through powerful visuals.',
    },
    'web-design-seo': {
      heading: 'SEO-Focused Web Designs',
      subheading: 'Our web designs combine stunning visuals with SEO strategies that enhance your site’s visibility, boost traffic, and increase conversions.',
    },
    'website-content': {
      heading: 'Website Content That Sells',
      subheading: 'We create powerful website content that connects with your audience, communicates your brand value, and drives meaningful engagement.',
    },
  };

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = serviceContent[slug];

  if (!service) {
    notFound();
  }

  return (
<section
  className="relative flex items-center justify-start h-[90vh] bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/service-banner.jpg')" }}
>
  {/* Light blue overlay */}
  <div className="absolute inset-0 bg-cyan-500 bg-opacity-40"></div>

  <div className="relative z-10 text-white px-6 md:px-16 animate-fadeInUp max-w-2xl">
    {/* Heading (single line) */}
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-left animate-slideUp delay-100">
      {service.heading}
    </h1>

    {/* Subheading (full sentence) */}
    <p className="text-base md:text-xl font-medium mb-8 leading-relaxed text-left animate-slideUp delay-300">
      {service.subheading}
    </p>

    {/* Button */}
    <Link href="/#contact">
      <button className="bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 transform transition duration-300 text-white font-bold py-3 px-8 rounded-lg text-base md:text-lg animate-slideUp delay-500">
        Get A Quote
      </button>
    </Link>
  </div>
</section>
  );
}

export async function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}
