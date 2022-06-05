import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import person1 from '../../images/Ellipse 90.png';
import person2 from '../../images/Ellipse 91.png';
import person3 from '../../images/Ellipse 92.png';

const Testimonials = () => {
    return (
        <div className='bg-primary mt-28 mb-28'>
            <div className='flex flex-col justify-center items-center h-[500px]'>
                <h4 className='text-secondary text-2xl font-bold mb-5 text-center'>Testimonials</h4>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full md:w-1/2 my-5"
                >
                    <SwiperSlide className='px-6'>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className='flex'>
                                    <img src={person1} alt="" width={64} />
                                    <div className='ml-3 flex flex-col justify-center'>
                                        <h2 class="card-title text-base">Nash Patrik</h2>
                                        <h2 class="card-title text-xs">CEO, Manpol</h2>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                                <div class="card-actions justify-start">
                                    <div class="rating rating-md">
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-6'>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className='flex'>
                                    <img src={person2} alt="" width={64} />
                                    <div className='ml-3 flex flex-col justify-center'>
                                        <h2 class="card-title text-base">Miriam Barron</h2>
                                        <h2 class="card-title text-xs">CEO, Manpol</h2>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                                <div class="card-actions justify-start">
                                    <div class="rating rating-md">
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-6'>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className='flex'>
                                    <img src={person3} alt="" width={64} />
                                    <div className='ml-3 flex flex-col justify-center'>
                                        <h2 class="card-title text-base">Bria Malone</h2>
                                        <h2 class="card-title text-xs">CEO, Manpol</h2>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                                <div class="card-actions justify-start">
                                    <div class="rating rating-md">
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
                                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled checked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;