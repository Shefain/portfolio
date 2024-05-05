import { NavLink } from 'react-router-dom';
import frontImg from '../assets/fontImg.jpeg';

const Home = () => {
  console.log('home');
  return (
    <section className=' bg-[#020200] h-svh '>
      <div className=" container m-auto px-4 flex justify-between items-center h-full">
        <div className="info fles-1">
          <h1 className="text-3xl font-bold text-slate-100">
            HI, It's Muhammad MaHi
          </h1>
          <h2 className="text-2xl font-semibold text-slate-200">
            {' '}
            A Front-End focused Full-Stack Developer
          </h2>
          <h3 className="text-xl text-slate-300">
            _____ in REACT AND TypeScript
          </h3>
          <NavLink to="resume" className=" text-slate-200">
            Resume
          </NavLink>
        </div>
        <div className="frontImg h-full  flex-3">
          <img src={frontImg} alt="" className='h-full bg-container rounded-full min-w-fit ' />
        </div>
      </div>
    </section>
  );
};

export default Home;
