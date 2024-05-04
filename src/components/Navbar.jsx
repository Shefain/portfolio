import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Navlinks =[
        "home",
        "portfolio",
        "about",
        "contact",
        "resume"
    ] 
  return (
    <nav className=" flex container m-auto justify-between px-4 h-full items-center">
      <span className="text-4xl underline decoration-wavy decoration-cyan-400 font-semibold">
        M<span className="">a</span>
        <span>Hi</span>
      </span>
      <ul className="flex list-none space-x-3 uppercase">
        {Navlinks.map((item)=> <li key={Math.random()}><NavLink to={`${item == 'home' ? '/': item}`}>{item}</NavLink>  </li>  ) }
      </ul>
    </nav>
  );
};

export default Navbar;
