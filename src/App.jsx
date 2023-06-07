import "./App.css";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe";
import { useState } from "react";

//When I'm on the homepage and select the link to another page, the react app component will render the selected page.

// Key Start
const pages = {
  aboutMe: <AboutMe />,
};

function App() {
  const [currentPage, setCurrentPage] = useState("aboutMe");

  return (
    <>
      <Menu />
      <div className="bg-gradient-to-b from-orange-50 via-indigo-200 to-orange-50">
        <div className="container mx-auto min-h-screen">
          {pages["aboutMe"]}
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
          
          <h2 className="font-bold text-lg">Career</h2>
          <p>
            Welcome! I&apos;m a full-time front-end engineer, with several years
            of product management experience.
          </p>
          
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

          <div className="container mx-auto">
            <iframe
              className="w-full"
              src="https://giphy.com/embed/mq3spgAIfKJiveyjXg"
            ></iframe>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
