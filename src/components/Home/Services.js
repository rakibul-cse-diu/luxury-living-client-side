import React from 'react';
import apartment from '../../images/icons/apartment 1.png';
import residential from '../../images/icons/lessee 1.png';
import showroom from '../../images/icons/affordable 1.png';

const Services = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-28'>
            <div>
                <h4 className='text-secondary text-base font-medium text-center'>Services</h4>
                <h1 className='text-secondary text-xl md:text-4xl text-center font-bold mt-3'>We're an agency tailored to all</h1>
                <h1 className='text-secondary text-xl md:text-4xl text-center font-bold'>clients' needs that always delivers</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 my-16 lg:px-16'>
                <div class="card bg-base-100 text-primary-content">
                    <figure className='flex flex-col'>
                        <img src={apartment} alt="service" width={77} height={77} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title justify-center">Office Interior Design</h2>
                        <h2 class="card-title justify-center">$299</h2>
                        <p className='text-center font-light text-base text-[#606268]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div class="card bg-base-100 text-primary-content shadow-2xl">
                    <figure className='flex flex-col'>
                        <img src={showroom} alt="service" width={77} height={77} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title justify-center">Showroom Design</h2>
                        <h2 class="card-title justify-center">$399</h2>
                        <p className='text-center font-light text-base text-[#606268]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div class="card bg-base-100 text-primary-content">
                    <figure className='flex flex-col'>
                        <img src={residential} alt="service" width={77} height={77} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title justify-center">Residential/ Home</h2>
                        <h2 class="card-title justify-center">$499</h2>
                        <p className='text-center font-light text-base text-[#606268]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className='btn btn-secondary capitalize hover:btn-accent text-base-100'>Explore more</button>
            </div>
        </div>
    );
};

export default Services;