export default function Home() {
  return (
    <>
      <div className="py-6">
        <div className="text-3xl tracking-wide text-center hover:italic">
          Alexandra Zajaczkowski
        </div>
        <div className="mb-8 mx-96">
          <p className="py-3 pointer-events-none text-sm text-align">
            I am a front-end software engineer that transitioned from product
            management. To learn more about me or view my projects, select one
            of the options below.{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="flex flex-col py-6 space-y-4 items-center box-border w-60 border-2 border-blue-500">
        <button className="rounded-lg bg-indigo-100  hover:bg-orange-600 hover:border-orange-600 border-8 ring-2 shadow-lg shadow-blue-500/50">
            More About Me 
          </button>
          <button className="rounded-lg bg-indigo-100 hover:bg-orange-600 border-8 hover:border-orange-600 ring-2 shadow-lg shadow-blue-500/50">
            Code Projects
          </button>
        </div>
        </div>
      
    </>
  );
}
