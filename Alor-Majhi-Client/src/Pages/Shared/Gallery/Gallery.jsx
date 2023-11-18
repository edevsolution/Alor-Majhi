import React from 'react';

const Gallery = () => {
    return (
        <div className='primary-bg px-2 py-5'>
            <h1 className='text-center text-6xl secondary-text font-bold'>Gallery</h1>

            {/* All years */}
            <div className='flex justify-center items-center gap-2 text-3xl py-4 secondary-text'>
                <p>All /</p>
                <p>2018 /</p>
                <p>2019 /</p>
                <p>2020 /</p>
                <p>2021</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-3 mx-auto py-5 w-[95%]'>
                <div className='relative my-2 w-[90%] group '>
                    <img className="w-[100%] rounded-lg rounded-tl-[100px] rounded-br-[100px] group-hover:opacity-50 transition-all transform ease-in-out delay-75" src="http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/gallery-1.jpg" alt="" />
                    <p className='absolute top-1/2 px-2 group-hover:hidden  text-4xl text-white font-semibold transition-all transform ease-in delay-75'>Provide clean water all over the world.</p>
                    <button className='hidden absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-white secondary-bg rounded hover:inline-block group-hover:inline-block transition-all ease-in-out delay-75'>See more</button>
                </div>
                <div className='relative my-2 w-[90%] group '>
                    <img className="w-[100%] rounded-lg rounded-tl-[100px] rounded-br-[100px] group-hover:opacity-50 transition-all transform ease-in-out delay-75" src="http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/gallery-1.jpg" alt="" />
                    <p className='absolute top-1/2 px-2 group-hover:hidden  text-4xl text-white font-semibold transition-all transform ease-in delay-75'>Provide clean water all over the world.</p>
                    <button className='hidden absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-white bg-blue-500 rounded hover:inline-block group-hover:inline-block transition-all ease-in-out delay-75'>See more</button>
                </div>
                <div className='relative my-2 w-[90%] group '>
                    <img className="w-[100%] rounded-lg rounded-tl-[100px] rounded-br-[100px] group-hover:opacity-50 transition-all transform ease-in-out delay-75" src="http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/gallery-1.jpg" alt="" />
                    <p className='absolute top-1/2 px-2 group-hover:hidden  text-4xl text-white font-semibold transition-all transform ease-in delay-75'>Provide clean water all over the world.</p>
                    <button className='hidden absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-white bg-blue-500 rounded hover:inline-block group-hover:inline-block transition-all ease-in-out delay-75'>See more</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallery;