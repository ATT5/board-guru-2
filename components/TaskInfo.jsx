"use client";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardGuruContext";
import { dateIcon, textIcon } from "@/assets";
import Image from "next/image";
const TaskInfo = () => {
  const context = useContext(BoardContext);

  const task = context.taskInfo;
  console.log(task);

  return (
    <>
      <div
        className=" w-full h-screen  absolute top-0 bottom-0 z-10 bg-black/30 "
        onClick={context.taskInfoHandler}
      />
      <section
        className="bg-gray-50  w-5/6 md:w-1/2 p-9 rounded-lg flex flex-col gap-2 absolute top-10 left-0 right-0  mx-auto z-20 
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] animated animatedFadeInUp fadeInUp"
      >
        <h3 className="font-medium text-2xl">Task Description</h3>
        <p className="text-gray-500 text-lg">*{task.content}</p>
        <div className="flex gap-2">
          <Image width={25} height={25} alt="date" src={dateIcon} />
          <p>{task.date}</p>
        </div>
        <div className="flex gap-2">
          <Image width={25} height={25} alt="date" src={textIcon} />
          <p>{task.description}</p>
        </div>
      </section>
    </>
  );
};

export default TaskInfo;
