function AboutMe() {
  return (
    <>
      <div className="mb-8">
        <div className="text-3xl tracking-wide text-center hover:italic">
          About me
        </div>
        <div className="mb-8">
        <p className="pointer-events-none text-sm text-left">
          When working on my webpage, I wanted to convey parts of my personality. I say parts 
          because it's inherently challening in my humble opinion, to summarize any human being
          into a few sentences. However, it is possible, to show hints and glimmers of onself in whatever we set out to do. In this instance, it's my webpage.
          I hope when you go through my pages, you get a sense of what I'm about and have an experience through the styles, fonts, colors
          and the descriptions and projects that I provide. This will be an on-going development, meaning the content and pages will change over time
          just like we do. 
        </p>
        </div>

        {/* <div className="box-border h-32 w-32 p-28 border-28 flex flex-row bg-blue-100"> */}
        {/* Post-It-1 */}

        <div className="flex flex-row my-4 space-x-2">
        <div className="flex-col">
        <div className="my-4 w-64 h-64 p-2 bg-blue-200 drop-shadow-md rotate-5 hover:bg-transparent">

        <div>I'm a piece of lettuce</div>
        <div>Cats fly on melons</div>
        <div>Eat a popsicle, Larry.</div>
        </div>
        </div>
  
    <div className="flex flex-row my-4 space-x-2">
    <div className="flex-col">
        <div className="my-4 w-64 h-64 p-2 bg-orange-200 drop-shadow-md rotate-3 hover:bg-transparent">
        <h2 className="font-bold text-lg">Career</h2>
        <p>
              Welcome! I'm a full-time front-end engineer, with several years of
              product management experience.
            </p>
</div>
</div>
<div className="flex-col">
<div className="my-4 w-64 h-64 p-2 bg-blue-200 drop-shadow-md -rotate-3 hover:bg-transparent">
        <h2 className="font-bold text-lg">Past Experience</h2>
        <p>I&apos;ve worked for two start-ups- one of which I&apos;m still in.
        </p>
        </div>
        </div>
        <div className="flex-col">
<div className="my-4 w-64 h-64 p-2 bg-orange-200 drop-shadow-md rotate-6 hover:bg-transparent">
        <h2 className="font-bold text-lg">Passions</h2>
        <p>
          When I&apos;m not busy coding projects, I immerse myself in the
          creative arts of writing, performance, photography and cinema.
        </p>
        <div className="flex-col">
<div className="my-4 w-64 h-64 p-2 bg-orange-200 drop-shadow-md -rotate-6 hover:bg-transparent">
        <h2 className="font-bold text-lg">Stay tuned...</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
       </div>
    </>

  );
}
export default AboutMe;
