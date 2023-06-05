import './App.css'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import Aboutme from './Aboutme.jsx'

function App() {

  return (
    <>
    <Menu/>
    <div className="container mx-auto">

      {/* NAVIGATION TABS  */}
      <Aboutme/>
       {/* END TABS  */}
      <h1
        className="text-3xl tracking-wide text-center shadow-sm mb-2 hover:italic"
      >
        Alexandra Zajaczkowski 
      </h1>
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alexandra-zajaczkowski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2xl text-gray-100"></i>
            </a>
          </li>
        </ul>
      </div>
       {/* Post-It-Notes-Start  */}
      {/* <div className="flex flex-row my-4 space-x-2">
       row of content 
       <div className ="flex-col"> */}
       {/* column of content */}

       {/* <div className ="my-4 w-64 h-64 p-2 bg-yellow-300 drop-shadow-md rotate-6">  */}
       <h2 className="font-bold text-lg">Career</h2>
            <p>
              Welcome! I&apos;m a full-time front-end engineer, with several years of
              product management experience.
            </p>
          {/* </div> */}
        {/* </div> */}
      {/* <div className="flex-col">
          <div className="my-4 w-64 h-64 p-2 bg-sky-300 drop-shadow-md -rotate-6">  */}
      <h2 className="font-bold text-lg">Past Experience</h2>
            <p>I&apos;ve worked for two start-ups- one of which I&apos;m still in.</p>
          {/* </div>
        </div>  */}
      {/* <div className="flex-col">
          <div className="my-4 w-64 h-64 p-2 bg-yellow-300 drop-shadow-md rotate-6">  */}
      <h2 className="font-bold text-lg">Passions</h2>
            <p>
              When I&apos;m not busy coding projects, I immerse myself in the
              creative arts of writing, performance, photography and cinema.
            </p>
          {/* </div>
        </div>  */}
      {/* <div className="flex-col">
          <div className="my-4 w-64 h-64 p-2 bg-sky-300 drop-shadow-md -rotate-6"> */}
            <h2 className="font-bold text-lg">Stay tuned...</h2>
            <p></p>
          {/* </div>
        </div>
      </div> */}
      {/* Post-It-Notes-End */}

       {/* <img src="https://content.codecademy.com/articles/github-pages-via-web-app/happy-ice-cream.gif"/>  */}

      <div className="container mx-auto">
        <iframe
          className="w-full"
          src="https://giphy.com/embed/mq3spgAIfKJiveyjXg"
        ></iframe>
      </div>
      <Footer/>
    </div> </>
  )
}

export default App
