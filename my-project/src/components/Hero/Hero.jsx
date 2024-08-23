import React from 'react';
import HeroImg from '../../assets/Hero/Hero.png';

const Hero = () => {
  return (
    <div className='h-[750px] md:h-[575px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20 flex items-center justify-center'>
      <section className='container flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white'>
          {/* Hero text container */}
          <div 
            data-aos="fade-right"
            data-aos-duration = "400"
            data-aos-once="true"
            className='flex flex-col items-center text-center gap-8 md:items-start md:text-left'>
            <h1 className='text-4xl  pt-10 md:pt-0 px-5 md:px-0'>We Build Apps That Get Trending On Appworld</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus eius quis ad enim aliquid iusto eum nihil exercitationem necessitatibus?</p>
            
            <div className='space-x-4'>
              <button className='btn-primary'>Get Started</button>
              <button className='btn-outline'>Get Started</button>
            </div>
          </div>

          {/* Hero image container */}
          <div className='flex justify-center md:justify-end'>
            <img src={HeroImg} alt="Not Found" 
            data-aos="fade-left"
            data-aos-duration = "400"
            data-aos-once="true"
            className='max-w-xs'/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
