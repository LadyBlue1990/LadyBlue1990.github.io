export default function Home() {
  return (
    <>
      <div className="py-8">
        <div className="text-3xl tracking-wide text-center hover:italic">
          Alexandra Zajaczkowski
        </div>
        <div className="mb-8">
          <p className="py-3 pointer-events-none text-sm text-left ">
            I am a front-end software engineer that transitioned from product
            management. To learn more about me or view my projects, select one
            of the options below.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col py-6 space-y-4 items-center">
        <button className="rounded-lg bg-purple-400 hover:bg-purple-500 hover:border-purple-600 border-8 border-purple-400 ring-2 shadow-lg shadow-blue-500/50">
            Save
          </button>
          <button className="rounded-lg bg-purple-400 hover:bg-purple-500 border-8 border-purple-400 ring-2 shadow-lg shadow-blue-500/50">
            Save Larry
          </button>
          <button className="rounded-lg bg-purple-400 hover:bg-purple-500 border-8 border-purple-400 ring-2 shadow-lg shadow-blue-500/50">
            Save Larry a;lkdlskd
          </button>
        </div>
    </>
  );
}
