import React from 'react';
import image1 from '../assets/paris-5310783_1280.jpg';
import image2 from '../assets/college-student-4369850_1280.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={image2}
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Slide 1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Study in Top Universities</h1>
            <p className="mt-2 text-sm md:text-lg">
              With Exam score 5.5 can apply | UG/PG Students
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Apply Now</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide2" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={image1}
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Slide 2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Get Your Dream Education Abroad</h1>
            <p className="mt-2 text-sm md:text-lg">
              Tailored programs for your success
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Learn More</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide3" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Slide 3"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Pay After Visa Approval</h1>
            <p className="mt-2 text-sm md:text-lg">
              No upfront costs for application
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Start Today</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide4" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Slide 4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Achieve Academic Excellence</h1>
            <p className="mt-2 text-sm md:text-lg">
              Top programs designed for your goals
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Get Started</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide1" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
