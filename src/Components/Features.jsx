import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Global Visa Support',
      description: 'We assist with visa applications to over 50 countries worldwide, ensuring a seamless process.'
    },
    {
      icon: '💼',
      title: 'Expert Consultation',
      description: 'Our team of visa experts provides personalized advice tailored to your unique travel needs.'
    },
    {
      icon: '📄',
      title: 'Hassle-Free Documentation',
      description: 'We handle all your paperwork, ensuring accuracy and timely submission to avoid delays.'
    },
    {
      icon: '⏱️',
      title: 'Fast Processing',
      description: 'We prioritize efficiency, offering expedited visa processing services to save you time.'
    },
    {
      icon: '💳',
      title: 'Affordable Services',
      description: 'Enjoy top-notch visa services at competitive rates with no hidden charges.'
    },
    {
      icon: '📞',
      title: '24/7 Customer Support',
      description: 'Our support team is available around the clock to assist with your queries and concerns.'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Choose Our Visa Services?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We make your travel dreams come true with our reliable and efficient visa solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
