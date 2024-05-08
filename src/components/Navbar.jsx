import { NavLink } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const Navlinks = ['home', 'portfolio', 'about', 'contact'];
  return (
    <nav className="realative flex container m-auto justify-between px-4 h-full items-center sticky top-0 ">
      <span className="text-4xl underline decoration-wavy decoration-secondary font-semibold">
        M<span className="">a</span>
        <span>Hi</span>
      </span>
      <ul className=" hidden md:flex  list-none  uppercase  justify-around transition duration-150 ease-out ">
        {Navlinks.map((item) => (
          <li key={Math.random() }  className='w-[100px] text-center '>
            <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : " " }  >{item}</NavLink>
          </li>
        ))}
        <li className='flex bg-secondary text-slate-600 font-semibold py-1 px-2'>
          <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
        </li>
      </ul>
      <ul className=" flex md:hidden flex-col absolute top-8 right-0 list-none  uppercase  justify-around transition duration-150 ease-out bg-primary  ">
        {Navlinks.map((item) => (
          <li key={Math.random() }  className='w-[100px] text-center '>
            <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : 
            " " }  >{item}</NavLink>
          </li>
        ))}
        <li className='flex bg-secondary ml-auto text-slate-600 font-semibold py-1 px-2'>
          <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
        </li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
