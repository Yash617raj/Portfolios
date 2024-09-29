import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import express from "../assets/express.png"
import cpp from "../assets/cpp.png"
import mongoDB from "../assets/mongodb.png"
import nodeJs from "../assets/node.png"

const Skills = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 9,
            src: mongoDB,
            title: 'MongoDB',
            style: 'shadow-green-300',
        },
        {
            id: 6,
            src: express,
            title: 'Express Js',
            style: 'shadow-white',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-500',
        },
        {
            id: 10,
            src: nodeJs,
            title: 'NodeJs',
            style: 'shadow-green-800',
        },
        {
            id: 5,
            src: tailwind,
            title: 'TailWind',
            style: 'shadow-sky-500',
        },
        {
            id: 7,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-800',
        },
    ]

  return (
    <div name="Skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the techinal Skills that I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    tech.map(({id,src,title,style})=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Skills