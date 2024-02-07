function Projects() {
  return ( 
    <div className="isolate aspect-video lg:w-1/2 lg:gap-0 w-full gap-4 rounded-xl bg-white/20 shadow-lg backdrop-blur-md ring-1 ring-black/5">
      <h1 className="text-white font-bold text-3xl py-2 px-4">Projects</h1>
      <ul className="grid grid-cols-1 gap-4 p-4">
        {/* <li className="bg-white/15 rounded-lg p-4 shadow-lg ring-1 ring-black/5"> */}
        <li className="">
          <h2 className="text-white font-bold text-2xl">Project 1</h2>
          <p className="text-white">Description</p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;