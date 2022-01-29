import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="md:py-12 py-8 flex justify-center items-center bg-bg-surface w-full">
      <p className="text-white-secondary font-medium text-lg md:text-2xl">
        This is a portfolio template made by https://github.com/PaceCodes.
        Thanks for using it!
      </p>
    </footer>
  );
};

export default Footer;
