"use client";
import Task from "./Task";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardGuruContext";
import { deleteIcon } from "@/assets";
import Image from "next/image";
const Column = ({ column, tasks, index }) => {
  const context = useContext(BoardContext);

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-11/12 md:min-w-80  md:max-w-80   md:mb-10 flex flex-col flex-grow   rounded-md bg-white/20
           shadow-lg ring-1 ring-black/5   este"
        >
          {tasks && (
            <>
              <div className=" flex px-2 items-center border-b-2 border-gray-300  hover-child">
                <h2 className="w-full p-2 font-medium text-xl uppercase overflow-hidden">
                  <span className="bg-black w-3 h-3 rounded-full" />
                  {column.title}
                </h2>
                <Image
                  alt="delete"
                  src={deleteIcon}
                  width={30}
                  height={30}
                  className="cursor-pointer md:hidden"
                  onClick={() => context.deleteColumn(column.id)}
                />
              </div>

              <Droppable droppableId={column.id} type="task">
                {(provided, snapshot) => (
                  <>
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={` p-2 h-full rounded-md  ${
                        snapshot.isDraggingOver ? "bg-green-300" : ""
                      }`}
                    >
                      {tasks.map((task, index) => {
                        return (
                          <Task
                            key={task.id}
                            task={task}
                            index={index}
                            columnId={column.id}
                          />
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  </>
                )}
              </Droppable>
            </>
          )}
          <div className=" flex justify-end p-2 rounded-xl">
            <button
              onClick={() => context.openNewTaskHandler(column.id)}
              className="w-10 h-10 bg-green-400 rounded-full text-center active:bg-green-600 text-white"
            >
              +
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
