import { MdOutlineMenu } from 'react-icons/md';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <nav className=" relative flex items-center justify-between  p-3 ">
      <div>
        {' '}
        <h1 className='text-3xl'> MaHi</h1>
      </div>
      <ul
        className={` transition-all ${
          toggle ? 'flex' : 'hidden'
        } md:flex gap-4 fixed top-0  right-0 md:static md:top-auto md:right-auto bg-primary text-secondary w-svw md:w-auto flex-col md:flex-row h-svh md:h-auto text-center md:pr-0 pr-2 py-3 md:py-0 justify-center `}
      >
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='about'>ABOUT</NavLink></li>
        <li><NavLink to='contact'>CONTACT</NavLink></li>
        <li> <NavLink to='portfolio'>PROJECTS</NavLink></li>
        <li className=" md:hidden cursor-pointer" onClick={() => setToggle(false)}>
          {' '}
          X
        </li>
      </ul>
      <button
        className="w-fit md:hidden text-primary text-3xl bg-secondary px-5"
        onClick={() => setToggle(!toggle)}
      >
        <MdOutlineMenu />
      </button>
    </nav>
  );
};

export default Navbar;

// <nav className=" fixed flex container items-center justify-between px-4  ">
//   <span className="text-4xl underline decoration-wavy decoration-secondary font-semibold">
//     M<span className="">a</span>
//     <span>Hi</span>
//   </span>
//   <ul className={` flex list-none  uppercase  justify-around items-center `}>
//    {Navlinks.map((item) => (
//      <li key={Math.random() }  className='w-[100px] text-center '>
//        <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : " " }  >{item}</NavLink>
//      </li>
//    ))}
//    <li className='hidden md:flex bg-secondary text-slate-600 font-semibold py-1 px-2'>
//      <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
//    </li>
//  </ul>

//   <button className=' md:hidden' onClick={()=> setToggle(!toggle)}><MdOutlineMenu/></button>

//   {/* <ul className=" md:hidden flex-col  list-none  uppercase  justify-around transition duration-150 ease-out ">
//     {Navlinks.map((item) => (
//       <li key={Math.random() }  className='w-[100px] text-center '>
//         <NavLink to={`${item == 'home' ? '/' : item}`} className={({isActive})=> isActive? "decoration-secondary font-bold " : " " }  >{item}</NavLink>
//       </li>
//     ))}
//     <li className='flex bg-secondary text-slate-600 font-semibold py-1 px-2'>
//       <NavLink to="resume" className='flex justify-center items-center gap-2 text-xl'> Resume <MdOutlineFileDownload /></NavLink>
//     </li>
//   </ul> */}
// </nav>
