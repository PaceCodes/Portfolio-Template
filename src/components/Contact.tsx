import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Contact Me
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-3xl md:text-5xl">
              Wanna have a chat?
            </h1>
            <p className="text-white-secondary text-xl md:text-2xl font-light md:w-2/3">
              Message me on these platforms.
            </p>
            <a
              href="mailto:youremail@gmail.com"
              className="bg-blue-600 rounded-full py-3 px-8 md:py-4 md:px-12 w-max text-lg md:text-xl !mt-20"
            >
              Mail me!
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-2xl text-lg">
            <li>
              <a
                href="https://github.com/YourGitHubID"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p>My Github</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:yourmail@gmail.com"
                className="flex space-x-5 items-center hover:text-white"
              >
                <HiMail size={30} color="#3b82f6" />
                <p>yourmail@gmail.com</p>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/yourdiscordserverinvite"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaDiscord size={30} color="#3b82f6" />
                <p> My Discord Server</p>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourtwitter"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaTwitter size={30} color="#3b82f6" />
                <p>My Twitter</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yourinstagram"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaInstagram size={30} color="#3b82f6" />
                <p>My Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
