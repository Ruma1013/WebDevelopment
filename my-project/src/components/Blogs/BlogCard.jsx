import React from 'react'

const BlogCard = ({Img}) => {
  return (
   <>
    <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 '>
        <div className='overflow-hidden'>
            <img src={Img} alt=""
            data-aos="zoom-in"
            data-aos-duration = "800S"
            data-aos-once="true"
            className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:scale-110' />

        </div>  
        <div className='flex justify-between pt-2 text-slate-600 '>
            <p>April 22, 2022</p>
            <p className='line-clamp-1'>By someone</p>
        </div>
        <div className='space-y-2 py-3 dark:text-white'>
            <h1 className='line-clamp-1 font-bold'> 
                How to grow your business. How to grow your business. How to grow your business.</h1>
            <p className='line-clamp-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
   </>
  )
}

export default BlogCard
