"use client";
import { Draggable } from "@hello-pangea/dnd";
import { deleteIcon, iconInfo } from "@/assets";
import Image from "next/image";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardGuruContext";

const Task = ({ task, index, columnId }) => {
  const context = useContext(BoardContext);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <section
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`w-full  my-2 rounded-lg flex flex-col justify-between  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${
            snapshot.isDragging ? "bg-blue-100" : "bg-white/90"
          }`}
        >
          <div className="w-full flex justify-between p-2">
            <div className="flex items-center gap-3">
              <Image
                alt="information"
                src={iconInfo}
                width={20}
                height={20}
                className="cursor-pointer "
                onClick={() => context.taskInfoHandler(task)}
              />
              <p className="overflow-hidden">{task.content}</p>
              {task.date.length > 0 && <p>{task.date}</p>}
            </div>

            <Image
              alt="delete"
              src={deleteIcon}
              width={30}
              height={30}
              className="cursor-pointer "
              onClick={() => context.deleteTaskHandler(task, columnId)}
            />
          </div>

          {task.img && (
            <img
              src={task.img}
              alt={task.content}
              className="w-full h-52 object-cover rounded-b-lg"
            />
          )}
        </section>
      )}
    </Draggable>
  );
};

export default Task;
