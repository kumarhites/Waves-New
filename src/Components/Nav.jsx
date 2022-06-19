import {BsSoundwave} from "react-icons/bs";

const Nav = () => {
return (
<nav className="backdrop-blur sticky w-full top-0 px-20 sm:px-4 py-2.5 rounded min-w-max">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <h1 className="flex items-center font-display text-[#ffffff]" style={{fontSize: '2rem'}}>
    <BsSoundwave size={40} className="text-cyan-500" />&nbsp; Waves</h1>
  </div>
</nav>
)
}

export default Nav;
