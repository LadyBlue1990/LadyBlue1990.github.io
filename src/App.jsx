import "./App.css";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe.jsx";
import Home from "./Home.jsx";
import { useState } from "react";

//When I'm on the homepage and select the link to another page, the react app component will render the selected page.

// Key Start
const pages = {
  HOME: <Home />,
  ABOUT_ME: <AboutMe />,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("ABOUT_ME");

  function handleMenuClick(message) {
    setCurrentPage(message);
  }

  return (
    <>
      <Menu handleClick={handleMenuClick} />
      <div className="bg-gradient-to-b from-orange-50 via-indigo-200 to-orange-50">
        <div className="container mx-auto min-h-screen">
          {pages[currentPage]}
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
