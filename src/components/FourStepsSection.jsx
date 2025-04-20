'use client';

export default function FourStepsSection() {
  const steps = [
    {
      icon: '/icons/headset.svg',
      title: 'Contact Us',
      description:
        'You will get a free consultation from our experts in the first stage of your book publishing journey. We will discuss your publishing aims and learn more about your book to see how we can best support you.',
    },
    {
      icon: '/icons/submit.svg',
      title: 'Submit Your Manuscript',
      description:
        'In this step, our expert editors will peruse your manuscript to assess its readiness for publishing, providing comprehensive feedback.',
    },
    {
      icon: '/icons/book.svg',
      title: 'Bring Your Book to Life',
      description:
        'We understand that self-publishers can be daunting, but with our guidance, you can confidently navigate the process and turn your manuscript into a published book.',
    },
    {
      icon: '/icons/share.svg',
      title: 'Share Your Story to The World',
      description:
        'When you’re ready to self-publish a book, we’ll handle the printing and distribution while providing audiobook publishing and marketing assistance to help you connect with readers.',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1440] mb-16">
        Launch Your Book in Four Simple Steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-[#0a1440] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6">
              <img src={step.icon} alt={step.title} className="h-10 w-10 invert" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a1440] mb-3">
              {step.title}
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
