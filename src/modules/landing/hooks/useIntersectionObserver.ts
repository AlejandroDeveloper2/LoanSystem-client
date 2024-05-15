import { useEffect, useRef, useState } from "react";

import { useScreenType } from "@modules/core/hooks";

const useIntersectionObserver = () => {
  const [sectionName, setSectionName] = useState<string>("#home");
  const sectionsRef = useRef<HTMLElement>(null);
  const screenSize = useScreenType();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(
            getSectionName(entry.target.id),
            "",
            getSectionName(entry.target.id)
          );
          setSectionName(window.history.state);
        }
      });
    },
    {
      rootMargin: `${
        screenSize === "mobile" ? "-120px" : "-130px"
      } 0px 0px 0px`,
      threshold: screenSize === "mobile" ? 0.2 : 0.3,
    }
  );
  const sections = sectionsRef.current?.querySelectorAll(".section");

  const observeSection = (): void => {
    sections?.forEach((section) => observer.observe(section));
  };

  const unobserveSection = (): void => {
    sections?.forEach((section) => observer.unobserve(section));
  };
  useEffect(() => {
    observeSection();
    return () => unobserveSection();
  });

  const getSectionName = (sectionId: string): string => {
    const sectionName: string =
      sectionId === "home"
        ? "#home"
        : sectionId === "services"
        ? "#services"
        : sectionId === "questions"
        ? "#questions"
        : "#contact";
    return sectionName;
  };

  return { sectionsRef, sectionName };
};

export default useIntersectionObserver;
