import { FaGithub, FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
  return (
    <section className="px-5 flex justify-between items-center h-full ">
      <h1 className="text-xl "> Muhammad MaHi </h1>
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
    </section>
  );
};

export default Footer;
