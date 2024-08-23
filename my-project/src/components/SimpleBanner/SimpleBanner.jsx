import React from 'react';

const SimpleBanner = () => {
  return (
    <>
      <div className='bg-primary'>
      <div 
      data-aos="fade-up"
      data-aos-duration = "400"
      data-aos-once="true"
      className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          <div className="w-full h-64 md:h-full p-4 ">
            <iframe
              src="https://www.youtube.com/embed/gRWMen27Uio" 
              frameBorder="0"
              title="YouTube video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold pt-5 md:pt-0">
              Market your Brand
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus eius quis ad enim aliquid iusto eum nihil exercitationem necessitatibus?
            </p>
            <button className='btn-primary !text-slate-900 !bg-white'>Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SimpleBanner;
