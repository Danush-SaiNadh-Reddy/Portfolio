import React from 'react'

const Project = () => {
    return (
        <div className='text-white' id='projects'>
            <div className='text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl ml-4 mt-4 pb-8'>Projects</div>
            <div className='md:max-w-[1060px] sm:max-w-[600px] max-w-[400px] w-full mx-auto bg-gray-800 rounded-xl px-6 py-6 hover:bg-emerald-700 hover:scale-110 transform transition duration-300'>
                <h1 className='text-3xl font-semibold py-2 pl-3'>Machine Learning</h1>
                <ul className='list-disc list-outside pl-6'>
                    <li>Classification of different types of iris flowers using all machine learning models with tuning each model</li>
                    <li>Using Jupyter notebook ,Implemented all modelsand selected the best model (Random Forest Model) based on recall score.</li>
                </ul>
            </div> 
            
            <div className='md:max-w-[1060px] sm:max-w-[600px] max-w-[400px]  w-full mx-auto mt-4  bg-gray-800 rounded-xl px-6 py-6  hover:bg-emerald-700 hover:scale-110 transform transition duration-300'>
                <h1 className='text-3xl font-semibold py-2 pl-3'>Portfolio</h1>
                <ul className='list-disc list-outside pl-6'>
                    <li>Developed a Dynamic responsive Portfolio for my Resume</li>
                    <li>Implemented using React.js,TailwindCSS.</li>
                    <li>This PortFolio describes all my Skills,Experience and Education.</li> 
                    <li>It also shows my projects,github links to my project and my contact details</li>
                </ul>
            </div>



            <div className='md:max-w-[1060px] sm:max-w-[600px] max-w-[400px]  w-full mx-auto mt-4  bg-gray-800 rounded-xl px-6 py-6 hover:bg-emerald-700 hover:scale-110 transform transition duration-300 '>
                <h1 className='text-3xl font-semibold py-2 pl-3'>Rig Website</h1>
                <ul className='list-disc list-outside pl-6'>
                    <li>Developed a Static frontend web application for our Robotics Interest Club</li>
                    <li>Implemented using React.js, TailwindCSS .</li>
                    <li>The project features a Home page, an About Us page, and dedicated project pages showcasing all activities of the RIG club.</li>
                </ul>
            </div>


        </div>
    )
}

export default Project