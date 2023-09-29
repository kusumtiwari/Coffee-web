import {Link} from "react-scroll";

export default function ({display}) {
  return (
    <>
        <ul className={"block md:hidden text-center bg-orange-900 h-screen"}>
          <li className="uppercase font-medium cursor-pointer hover-effect font-poppins text-white pt-20 ">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-600}
              duration={500}
              onClick={() => {
               display();
              }}
            >
              Home
            </Link>
          </li>
          <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-600}
              duration={1000}
              onClick={() => {
                display();
               }}
            >
              About Us
            </Link>
          </li>
          <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-600}
              duration={1000}
              onClick={() => {
                display();
               }}
            >
              Services
            </Link>
          </li>
          <li className="uppercase font-medium cursor-pointer hover-effect pt-5 font-poppins text-white">
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-600}
              duration={1000}
              onClick={() => {
                display();
               }}
            >
              Menu
            </Link>
          </li>
        </ul>
    </>
  );
}
