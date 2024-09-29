import React from 'react'

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello, I'm Yash Raj Harsh. I'm a passionate Full Stack Web Developer
          with a strong foundation in both front-end and back-end technologies.
          My expertise spans from crafting responsive, user-friendly interfaces.
          With a solid understanding of data structures and algorithms, I focus
          on writing efficient, clean code that powers seamless web experiences.
          I thrive on solving complex problems and continuously learning new
          technologies to enhance my skills. Whether working on a small project
          or a large-scale application, my goal is to deliver high-quality,
          maintainable software that meets users' needs.
        </p>
      </div>
    </div>
  );
}

export default About