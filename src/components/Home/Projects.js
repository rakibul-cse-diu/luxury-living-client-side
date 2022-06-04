import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading/Loading';
import location from '../../images/icons/map-pin-2-fill.png'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='flex flex-col justify-center items-center mt-28'>
            <div>
                <h4 className='text-secondary text-base font-medium text-center'>Projects</h4>
                <h1 className='text-secondary text-3xl text-center font-bold'>Discover the latest Interior Design available today</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 my-10 lg:px-16'>
                {
                    projects.slice(0, 3).map(project => <>
                        <div class="card bg-base-100 shadow-xl">
                            <figure className='flex flex-col'>
                                <img src={project.img} alt="service" />
                                <div className='flex justify-around items-center mt-4'>
                                    <img src={location} alt="" />
                                    <p className='ml-2'>Bangladesh</p>
                                </div>
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">{project.name}</h2>
                                <p>{`${project.description.slice(0, 200)}...`}</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-secondary hover:btn-accent text-base-100">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Projects;