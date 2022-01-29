import { FC } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  repoLink: string;
  index: number;
}

const WorkCard: FC<Props> = ({
  title,
  techTitle,
  description,
  repoLink,
  index,
}: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: isTabletOrMobile
          ? { x: index % 2 === 0 ? -30 : 30, opacity: 0 }
          : { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      }}
      transition={{
        duration: 0.4,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 200,
      }}
      viewport={{ once: true }}
      className="bg-bg-surface text-white px-10 py-8 flex flex-col space-y-2"
    >
      <p className="text-white-secondary uppercase font-medium tracking-widest text-sm">
        {techTitle}
      </p>
      <h3 className="font-medium text-xl tracking-wider">{title}</h3>
      <p className="text-white-secondary">{description}</p>
      <div className="flex items-center space-x-2 font-medium text-xs !mt-3">
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="uppercase py-2 px-4 rounded-md"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15), rgba(196,196,196, 0.15))",
          }}
        >
          Repository / Code
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;
