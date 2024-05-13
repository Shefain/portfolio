import { NavLink } from 'react-router-dom';
import frontImg from '../assets/fontImg.jpeg';

const Home = () => {
  console.log('home');
  return (
    <section className=' bg-[#020200] h-vh '>
      <div className=" container m-auto px-4 flex-row md:flex justify-between items-center content-center w-full h-full text-left  ">
        <div className="info fles-1 text-center md:text-left pt-5">
          <h1 className="text-5xl font-bold text-slate-100">
            HI, It's Muhammad MaHi
          </h1>
          <h2 className="text-4xl font-semibold text-slate-200">
            {' '}
            A Front-End focused Full-Stack Developer
          </h2>
          <h3 className="text-2xl text-slate-300">
            Speselised in REACT AND TypeScript
          </h3>
          <NavLink to="resume" className=" text-slate-200">
            RESUME
          </NavLink>
        </div>
        <div className="frontImg h-full  flex-3">
          <img src={frontImg} alt="Muhammad MaHi" className='rounded text-center w-full rounded-5xl  'style={{ objectFit: "cover"}} />
        </div>
      </div>
    </section>
  );
};

export default Home;
