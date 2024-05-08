import { FaGithub, FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
  return (
    <section className=" text-center h-screen bg-primary text-secondary ">
      <div className="w-full text-center h-screen m-auto">
        <h1 className="text-4xl mb-5"> Front-Focused Full-Stack Developer </h1>
        <p className="text-xl mb-5">
          {' '}
          Love To Work With JavaScript and TypeScript
        </p>
        <ul className="flex justify-center gap-5">
          <li className="text-3xl">
            <a href="linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li className="text-3xl">
            <a href="www.github.com" target="_blank">
              <FaGithub />
            </a>{' '}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
