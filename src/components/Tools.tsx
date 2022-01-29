import { FC } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../redux/reduxHooks";

const Tools: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);

  return (
    <section
      id="tools"
      className="space-y-12 px-8 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Tools I use
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start md:col-span-2 lg:col-span-1">
          <RiComputerLine color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            MC-Coding
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>Java</li>
            <li>Kotlin</li>
            <li>Spigot, Bukkit</li>
            <li>Spongepowered Mixins</li>
          </ul>
        </div>
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start">
          <FiDatabase color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Web development
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS, NextJS, ThreeJS</li>
            <li>Firebase, Redux</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start">
          <AiOutlineHeart color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Mobile Development
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>Kotlin</li>
            <li>Flutter</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
