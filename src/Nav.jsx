import { useState } from "react";
import {Link} from "react-scroll";

export default function Nav({display, showul}) {

  const [clickedLi, setclickedLi] = useState(false);

  function removediv(){
    setclickedLi(!clickedLi);
    console.log("hi");c
  }
  return (
    <div>
      <nav className="h-16 flex justify-between px-3 md:px-6 bg-orange-200">
        <div className="logo flex items-center">
          <img
            src="./coffee-beans1.png"
            className="flex-shrink-0 pr-2 color-white"
            alt="Coffee Beans"
          />
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl font-poppins">COFFEE BEAN</h1>
        </div>
        <button onClick={display} className="md:hidden">
          {showul ? 
          (<h1 className="text-3xl font-semibold">X</h1>) : 
          (<img src="./hamburger_icon.png" className="color-black"></img>)}
        </button>
        <ul className="hidden md:flex items-center justify-between mr-2">
          <li className="uppercase font-semibold cursor-pointer hover-effect pr-6 font-poppins ">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} onClick={removediv}>Home</Link>
          </li>
          <li className="uppercase font-semibold cursor-pointer hover-effect pr-6 font-poppins">
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={30} duration={1000}>About Us</Link>
          </li>
          <li className="uppercase font-semibold cursor-pointer hover-effect pr-6 font-poppins">
          <Link activeClass="active" to="service" spy={true} smooth={true} offset={35} duration={1000}>Services</Link>
          </li>
          <li className="uppercase font-semibold cursor-pointer hover-effect font-poppins">
           <Link activeClass="active" to="menu" spy={true} smooth={true} offset={25} duration={1000}>Menu</Link>
          </li>
        </ul>
      </nav>
      
      {/* {(showul && !clickedLi)?(
  <ul className={"block md:hidden text-center bg-orange-900 h-screen"}>
    <li className="uppercase font-medium cursor-pointer hover-effect font-poppins text-white pt-20 ">
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} onClick={() => {
              // removediv();
            }}>Home</Link>
    </li>
    <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={30} duration={1000}>About Us</Link>
    </li>
    <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
      <Link activeClass="active" to="service" spy={true} smooth={true} offset={35} duration={1000}>Services</Link>
    </li>
    <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
      <Link activeClass="active" to="menu" spy={true} smooth={true} offset={25} duration={1000}>Menu</Link>
    </li>
  </ul>
) : null} */}
</div>
  );
}
