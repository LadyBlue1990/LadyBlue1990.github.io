export default function Menu() {
  // define the onClick event handler function here


  return (
    <div className="grid gap-4 grid-cols-5 w-full p-4 bg-gradient-to-b from-indigo-200 to-orange-50">
      {/* add an onClick prop to the button, and pass in the event handler you wrote above */}

      <button onClick={function() {
        alert('You CLICKED ME!');
      }}>Home</button>

      <button onClick={function() {
        alert('FRIES PLEASE');
      }}>About Me</button>

      <button onClick={function(){
      alert('and cheese');
      }}>Code Projects</button>
      
      <button onClick={function(){
        alert('and ketchup');
      }}>Writing</button>
      
      <button onClick={function(){
        confirm('thanks');
      }}>Misc. Experiments</button>
      
      {/* <div className="w-full">
        <div className="relative right-0">
          <ul className="relative flex list-none flex-wrap">
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 items-center justify-center"
                href="index.html"
              >
                <button className="fun-button">Home</button>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 items-center justify-center"
                href="index.html"
              >
                <button className="fun-button">About Me</button>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 items-center justify-center"
                href="codeprojects.html"
              >
                <button className="fun-button">Code Projects</button>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 items-center justify-center"
                href="writing.html"
              >
                <button className="fun-button">Writing</button>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 items-center justify-center"
                href="misc.html"
              >
                <button className="fun-button">Misc. Experiments</button>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
