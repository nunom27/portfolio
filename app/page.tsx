
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-20">
      <div className="isolate aspect-video w-1/2 rounded-xl bg-white/20 shadow-lg backdrop-blur-md ring-1 ring-black/5">
        <h1 className="text-white font-bold text-3xl py-2 px-4">Projects</h1>
        <ul className="grid grid-cols-1 gap-4 p-4">
          <li className="bg-white/15 rounded-lg p-4 shadow-lg ring-1 ring-black/5">
            <h2 className="text-white font-bold text-2xl">Project 1</h2>
            <p className="text-white">Description</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
