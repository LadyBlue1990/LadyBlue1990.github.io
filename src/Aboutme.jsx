function AboutMe() {
  return (
    <>
      <div className="mb-2">
        <div className="text-3xl tracking-wide text-center hover:italic">
          About me
        </div>
        <p className="pointer-events-none text-sm text-left">
          I am a product manager turned software engineer.
        </p>

        {/* <div className="box-border h-32 w-32 p-28 border-28 flex flex-row bg-blue-300"> */}
        {/* Post-It-1 */}
        <div className="flex flex-row my-4 space-x-2">
        <div className="flex-col">
        <div className="my-4 w-64 h-64 p-2 bg-yellow-300 drop-shadow-md rotate-6">

        <div>I'm a piece of lettuce</div>
        <div>Cats fly on melons</div>
        <div>Eat a popsicle, Larry.</div>
        </div>
        </div>
    </div>
    <div className="flex-col">
        <div className="my-4 w-64 h-64 p-2 bg-orange-300 drop-shadow-md rotate-6 font-bold text-lg">
        <h2 className="font-bold text-lg">Career</h2>
        <p>
              Welcome! I'm a full-time front-end engineer, with several years of
              product management experience.
            </p></div>
</div>
        <h2 className="font-bold text-lg">Past Experience</h2>
        <p>
          I&apos;ve worked for two start-ups- one of which I&apos;m still in.
        </p>

        <h2 className="font-bold text-lg">Passions</h2>
        <p>
          When I&apos;m not busy coding projects, I immerse myself in the
          creative arts of writing, performance, photography and cinema.
        </p>

        <h2 className="font-bold text-lg">Stay tuned...</h2>
    
      </div>
    </>
  );
}
export default AboutMe;
