import Head from "next/head";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio: Template</title>
        <meta
          name="description"
          content="A personal portfolio template by Pace."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/profile.png" sizes="100%" />
      </Head>
      <AnimateSharedLayout>
        {typeof window !== "undefined" && <DynamicNav />}
        <Hero />
        <Work />
        <Tools />
        <Contact />
        <Footer />
      </AnimateSharedLayout>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
