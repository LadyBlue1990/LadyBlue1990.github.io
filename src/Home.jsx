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
      {/* hover:bg-purple-500 - fills button color on hover*/}
      <div className="flex flex-col py-6 space-y-4 git items-center">
        <button className="rounded-lg bg-orange-400 hover:bg-orange-500 hover:border-orange-500 border-8 ring-2 shadow-lg shadow-blue-500/50">
            More About Me 
          </button>
          <button className="rounded-lg bg-orange-400 hover:bg-orange-500 border-8 hover:border-orange-500 ring-2 shadow-lg shadow-blue-500/50">
            Code Projects
          </button>
        </div>
    </>
  );
}
