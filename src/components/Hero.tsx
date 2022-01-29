import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src="/yourpicture.png"
          alt="Profile"
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <h1 className="text-white text-2xl font-openSans font-bold mt-6">
        Hi 👋🏻, I'm Pace.
      </h1>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        NextJS Portfolio
        <br /> websites, template, and
        <br /> for free.
      </motion.h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-white-secondary"
        animate={{
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
      >
        This is a <span className="font-medium">NextJS</span> portolio{" "}
        <span className="font-medium">template</span>. Since I am learning web
        development, I wanted to provide people who are also learning and coding
        in front-end but not good enough in it and want a portfolio. This is for
        them. If you're using this template please star the repository and
        follow me on my github, which can help me grow further.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
