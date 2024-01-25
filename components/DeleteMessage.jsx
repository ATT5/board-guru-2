const DeleteMessage = () => {
  return (
    <>
      <div
        onClick={context.handleNewColum}
        className=" w-full h-screen  absolute top-0 bottom-0 z-10 bg-black/30 "
      />
      <section>
        <p>Are you sure ? all the task would be deleted</p>
        <button>Delete</button>
      </section>
    </>
  );
};

export default DeleteMessage;
