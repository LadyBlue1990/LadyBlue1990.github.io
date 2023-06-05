function Menu() {

return(
    <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible bg-gradient-to-b from-indigo-300 to- bg-orange-100">        
        <div className="w-full">
          <div className="relative right-0">
       
            <ul className="relative flex list-none flex-wrap">
              <li className="z-30 flex-auto text-center">
                <a
                  className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                  href="index.html"
                >
                  <button className="fun-button">About Me</button>
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                  href="codeprojects.html"
                >
                  <button className="fun-button">Code Projects</button>
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                  href="writing.html"
                >
                  <button className="fun-button">Writing</button>
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                  href="misc.html"
                >
                  <button className="fun-button">Misc. Experiments</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>)
}
export default Menu