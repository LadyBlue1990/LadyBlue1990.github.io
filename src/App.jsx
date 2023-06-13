import "./App.css";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe.jsx";
import Home from "./Home.jsx";
import Writing from "./Writing.jsx"; 
import { useState } from "react";

//When I'm on the homepage and select the link to another page, the react app component will render the selected page.

// Key Start
const pages = {
HOME: <Home/>,
ABOUT_ME: <AboutMe/>,
WRITING: <Writing/>,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("ABOUT_ME");

  function handleMenuClick(message) {
    setCurrentPage(message);
  }
 
  return (
    <>
      <Menu handleClick={handleMenuClick} />
      <div className="bg-gradient-to-b from-indigo-100 via-orange-100 to-indigo-100 ">
        <div className="container mx-auto min-h-screen">
          {pages[currentPage]}
        
           
          
          <div className="width:100%;height:0;padding-bottom:80%;position:relative;">
            <iframe className="w-full" 
            src="https://giphy.com/embed/EbanRlLKGb5mZS3IXs"></iframe>
           
          <Footer />
          </div>
        </div>
      </div>
      </>
  );
}
