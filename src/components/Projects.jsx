import React from "react";
import SocialChat from "../assets/portfolio/SocialChat.png";
import netflix from "../assets/portfolio/netflix.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import StarBucks from "../assets/portfolio/StarBuks.png";
import todo from "../assets/portfolio/Todo.png"
import money from "../assets/portfolio/money.png"

const Projects = () => {
  const project = [
    {
      id: 1,
      src: SocialChat,
      title: "Social Chat",
      codeLink: "https://github.com/Yash617raj/Social-Chat",
    },
    {
      id: 2,
      src: netflix,
      title: "Netflix Clone",
      codeLink: "https://github.com/yash617raj/",
    },
    {
      id: 3,
      src: ecommerce,
      title: "E-commerce Platform",
      codeLink: "https://github.com/yash617raj/",
    },
    {
      id: 4,
      src: StarBucks,
      title: "StarBucks Website",
      codeLink: "https://github.com/yash617raj/",
    },
    {
      id: 5,
      src: money,
      title: "Money_tracker",
      codeLink: "https://github.com/yash617raj/",
    },
    {
      id: 6,
      src: todo,
      title: "Todo Website",
      codeLink: "https://github.com/yash617raj/",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Check Out Some of the Projects that I have made
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src, title, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-t-md w-full h-48 object-cover duration-200 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-center text-lg font-semibold">{title}</p>
                <div className="flex items-center justify-center mt-4">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
