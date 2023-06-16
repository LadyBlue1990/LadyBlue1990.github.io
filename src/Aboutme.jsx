function AboutMe() {
  return (
    <>
      <div className="py-6">
        <div className="text-3xl tracking-wide text-center hover:italic">
          About Me
        </div>

        {/* Post-It Start*/}

        <div className="flex flex-row my-10 mx-60 space-x-2">
          <div className="flex-col">
            <div className="my-6 w-64 h-64 p-2 bg-blue-200 drop-shadow-md rotate-5 hover:bg-transparent">
              <h2 className="font-bold text-lg">Career</h2>
              <p>
                I&apos;m a full-time font-end engineer with several years of
                product management experience.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="my-4 w-64 h-64 p-2 bg-orange-200 drop-shadow-md rotate-3 hover:bg-transparent">
              <h2 className="font-bold text-lg">Past Experience</h2>
              <p>
                I&apos;ve worked for two start-ups- one of which I&apos;m still
                in.
              </p>
            </div>
          </div>
          <div className="flex-col">
            <div className="my-4 w-64 h-64 p-2 bg-blue-200 drop-shadow-md -rotate-3 hover:bg-transparent">
              <h2 className="font-bold text-lg">Passions</h2>
              <p>
                {" "}
                When I&apos;m not busy coding, I immerse myself in the creative
                arts of writing, performance, photography and cinema.
              </p>
            </div>
          </div>
          <div className="flex-col">
            <div className="my-4 w-64 h-64 p-2 bg-orange-200 drop-shadow-md rotate-6 hover:bg-transparent">
              <h2 className="font-bold text-lg"> Cont'd</h2>
              <p>
                For more than just a tldr, read below. If you'd like to connect,
                send an email.
              </p>
            </div>
          </div>
          {/* Post-It End & Paragraph start*/}
        </div>
        <div className="flex flex-row items-center">
          <p className="indent-8 box-border border-2 border-blue-500 py-8 mx-72 pointer-events-none text-sm text-left leading-relaxed">
            I'm a former product manager that made the transition to software
            engineering. For now, I'm front-end focused. The transition came
            from long deliberation and curiosity. I'm an artist and creating is
            in my blood. I wanted to know how to make the magic happen.
            <p className="indent-8">
              My background in product and previously in the service industry
              and arts- allows me to create with the user's experience in mind.
              When working on my webpage, I wanted to convey parts of my
              personality. I say parts because it's inherently challening in my
              humble opinion, to summarize any human being into a few sentences.
              However, it is possible, to show hints and glimmers of onself in
              whatever we set out to do. In this instance, it's my webpage.
              <p className="indent-8">
                I hope when you go through my pages, you get a sense of what I'm
                about and have an experience through the styles, fonts, colors
                and the descriptions and projects that I provide. This will be
                an on-going development, meaning the content and pages will
                change over time just like we do.
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
