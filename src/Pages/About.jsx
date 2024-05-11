import sideImg from '../assets/4380747.jpg';

const About = () => {
  return (
    <section className=" h-lvh px-5  w-vw flex flex-col md:flex-row items-center  justify-evenly  ">
      <div className=" max-w-[400px] md:max-w-[500px]  pt-12 ">
        <h2 className=" text-center md:text-left text-3xl md:text-4xl font-semibold ">
          Front-End Focused
          <br /> <span className="text-2xl md:4xl">Full Stack Developer</span>
        </h2>
        <p className="md:text-justify text-primary pt-4 md:pt-0 text-center md:text-left text-xl line ">
          With my skills in JavaScript, TypeScript, and React, I enjoy creating
          dynamic websites that help make a positive impact.
        </p>
      </div>
      <div className=" max-w-[400px] " style={{ objectFit: 'cover' }}>
        <img src={sideImg} alt="" className=" h-full w-full" />
      </div>
    </section>
  );
};

export default About;
