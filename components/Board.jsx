"use client";

import Column from "./Column";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useContext, useState, useEffect } from "react";
import { BoardContext } from "@/context/BoardGuruContext";

const Board = () => {
  const context = useContext(BoardContext);
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and set the direction accordingly
      if (window.innerWidth < 768) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    };

    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
  }, []);

  const onDragEndHandler = (event) => {
    const { destination, source, draggableId, type } = event;
    context.tasksHandler(destination, source, draggableId, type);
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="all-columns" direction={direction} type="column">
        {(provided) => (
          <section
            ref={provided.innerRef}
            {...provided.droppableProps}
            // className="flex flex-col md:flex-row items-center md:items-start justify-around gap-10 px-3 md:px-14  "
            className="w-full  px-5 flex  flex-col md:flex-row md:items-start items-center pt-4
            md:overflow-x-auto gap-10  absolute top-20 bottom-0 left-0 right-0 "
          >
            {context.state.columnOrder.map((columnId, index) => {
              const column = context.state.columns[columnId];
              const task = column.taskIds.map(
                (taskId) => context.state.tasks[taskId]
              );

              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={task}
                  index={index}
                />
              );
            })}
            {provided.placeholder}{" "}
            <button
              onClick={context.handleNewColum}
              className="min-w-64 h-12 p-2  bg-white/20 rounded-md text-start active:bg-slate-50 font-medium
                shadow-lg ring-1 ring-black/5 flex items-center gap-3 "
            >
              <span className="w-8 h-8 p-1 border-2 rounded-full border-black flex items-center justify-center">
                +
              </span>
              Add Column
            </button>
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
