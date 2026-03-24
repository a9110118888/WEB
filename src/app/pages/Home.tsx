import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Experience } from "../components/Experience";

export function Home() {
  const location = useLocation();

  const isFirstRender = React.useRef(true);

  useLayoutEffect(() => {
    // If returning to a specific experience item, let the Experience component handle the scroll.
    if (location.search.includes('scrollToExp=')) {
      isFirstRender.current = false;
      return;
    }

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      if (isFirstRender.current) {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    isFirstRender.current = false;
  }, [location.hash, location.pathname, location.search]);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
    </div>
  );
}
