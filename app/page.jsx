"use client";

import { useEffect, useState } from "react";
import Stack from "./components/stack/stack";
import Portfolio from "./components/tinder-swipe/tinder-swipe";
import { projects, stack } from "./data/data";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedStack, setSelectedStack] = useState(-1);

  useEffect(() => console.log(selectedStack), [selectedStack]);

  // <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  //   <path
  //     fill="#FF0066"
  //     d="M45,-21.4C57.3,-4.7,65.5,18.9,57.3,39.5C49.1,60.1,24.6,77.7,-1.5,78.6C-27.6,79.5,-55.2,63.6,-65.3,41.9C-75.4,20.2,-68.1,-7.5,-54.3,-24.9C-40.5,-42.4,-20.2,-49.8,-1.9,-48.7C16.4,-47.6,32.8,-38,45,-21.4Z"
  //     transform="translate(100 100)"
  //   />
  // </svg>;

  // <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  //   <path
  //     fill="#FF0066"
  //     d="M44.5,-31.5C52.7,-11.5,50.9,8.4,41.8,24.4C32.7,40.3,16.4,52.3,-4,54.6C-24.3,56.9,-48.6,49.5,-57.3,33.8C-66,18,-59.1,-6.1,-47,-28.3C-34.8,-50.6,-17.4,-71,0.4,-71.2C18.2,-71.4,36.4,-51.4,44.5,-31.5Z"
  //     transform="translate(100 100)"
  //   />
  // </svg>;
  const ellipseVariants = {
    start: {
      d: "M82.5,64Q66,78,47,83Q28,88,20.5,69Q13,50,19,28.5Q25,7,49.5,8Q74,9,86.5,29.5Q99,50,82.5,64Z",
    },
    end: {
      d: "M83.5,67.5Q70,85,51,83.5Q32,82,21,66Q10,50,19,31Q28,12,47,17Q66,22,81.5,36Q97,50,83.5,67.5Z",
    },
  };

  return (
    <>
      <div className="container mx-auto flex flex-row items-stretch h-96 my-6">
        <div className="w-2/3 p-4 pr-2 flex">
          <div className="card card-background bg-white flex-1 rounded-lg">
            test
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="p-4 pb-2 pl-2 flex flex-1">
            <div className="card card-background bg-white flex-1 rounded-lg">
              test
            </div>
          </div>
          <div className="p-4 pt-2 pl-2 flex flex-1">
            <div className="card card-hover card-background background-dot flex items-center justify-center flex-1 rounded-lg">
              <span className="fancy-text">Github</span>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      {/* <div className=" w-full h-44 flex justify-center items-center">
        <motion.svg
          initial="start"
          animate="end"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={ellipseVariants}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
            fill="#5C63FE"
          />
        </motion.svg>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M79.5,63Q65,76,46,83Q27,90,20.5,70Q14,50,21,31Q28,12,49,13.5Q70,15,82,32.5Q94,50,79.5,63Z"
            fill="#4F46E5"
          ></path>
        </svg>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85,69Q72,88,51,86.5Q30,85,25,67.5Q20,50,25,33Q30,16,50,15.5Q70,15,84,32.5Q98,50,85,69Z"
            stroke="none"
            stroke-width="0"
            fill="#4F46E5"
          ></path>
        </svg>
      </div> */}

      <div className="container flex flex-col mx-auto py-8 relative">
        <div className="flex justify-center text-4xl font-bold mb-4">Stack</div>
        <div className="flex flex-row flex-wrap justify-center">
          {stack.map((tech, index) => {
            return (
              <Stack
                key={index}
                id={index}
                isSelected={index == selectedStack}
                setSelectedStack={setSelectedStack}
                {...tech}
              />
            );
          })}
        </div>
      </div>
      <div className="container flex flex-col mx-auto py-8">
        <div className="flex justify-center text-4xl font-bold mb-6">
          Projects
        </div>
        {projects.map((project, index) => {
          return index % 2 == 0 ? (
            <div
              key={index}
              className="flex flex-row items-center justify-center py-6"
            >
              <div className="w-44 p-4">{project.svg}</div>
              <div className="flex flex-col">
                <div className="text-xl font-bold">{project.title}</div>
                <div className="pr-4">{project.content}</div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-row items-center justify-center py-6"
            >
              <div className="flex flex-col">
                <div className="text-xl font-bold text-right">
                  {project.title}
                </div>
                <div className="text-right pl-4">{project.content}</div>
              </div>
              <div className="w-44 p-4">{project.svg}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
