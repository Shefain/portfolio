import { NavLink } from 'react-router-dom';
import { MdOutlineFileDownload, MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);





  console.log(toggle);
  const Navlinks = ['home', 'portfolio', 'about', 'contact'];
  return (
    <nav className=" fixed flex container m-auto justify-between px-4  ">
      <span className="text-4xl underline decoration-wavy decoration-secondary font-semibold">
        M<span className="">a</span>
        <span>Hi</span>
      </span>
      <ul className={` flex list-none  uppercase  justify-around items-center `}>
       {Navlinks.map((item) => (
         <li key={Math.random() }  className='w-[100px] text-center '>
           <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : " " }  >{item}</NavLink>
         </li>
       ))}
       <li className='flex bg-secondary text-slate-600 font-semibold py-1 px-2'>
         <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
       </li>
     </ul>
     
      <button className=' md:hidden' onClick={()=> setToggle(!toggle)}><MdOutlineMenu/></button>

    
      {/* <ul className=" md:hidden flex-col  list-none  uppercase  justify-around transition duration-150 ease-out ">
        {Navlinks.map((item) => (
          <li key={Math.random() }  className='w-[100px] text-center '>
            <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : " " }  >{item}</NavLink>
          </li>
        ))}
        <li className='flex bg-secondary text-slate-600 font-semibold py-1 px-2'>
          <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
