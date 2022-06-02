import React from 'react';

import banner from '../../images/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const TopBanner = () => {
    return (
        <div class="hero min-h-screen bg-primary pt-7">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="w-full shadow-2xl lg:w-1/2" alt='' />
                <div className='w-full lg:w-1/2'>
                    <h1 class="text-5xl font-bold text-secondary w-full lg:w-2/4">We Build Your Dream</h1>
                    <p class="py-6 text-[#606268]">Online Easte Agency, the mordern way to sell your own home,
                        You can use Griffin Residential to market your property</p>
                    <button class="btn btn-secondary text-base-100">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;