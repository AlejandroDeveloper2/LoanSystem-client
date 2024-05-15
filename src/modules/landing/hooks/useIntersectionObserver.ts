import { useEffect, useRef } from "react";

import { useScreenType } from "@modules/core/hooks";

const useIntersectionObserver = () => {
  const sectionsRef = useRef<HTMLElement>(null);
  const screenSize = useScreenType();

  const sections = sectionsRef.current?.querySelectorAll("section");
  const nav = sectionsRef.current?.querySelector("#nav1");
  const navLinkList = nav?.querySelector("ul");
  const navLinks = navLinkList?.querySelectorAll("a");

  const lateralNav = sectionsRef.current?.querySelector("#nav2");
  const navLinkList2 = lateralNav?.querySelector("ul");
  const navLinks2 = navLinkList2?.querySelectorAll("a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks?.forEach((link) => {
            if (entry.target.id === link.href.split("#")[1]) {
              link.querySelector("span")?.classList.add("active");
            } else {
              link.querySelector("span")?.classList.remove("active");
            }
          });

          navLinks2?.forEach((link) => {
            if (entry.target.id === link.href.split("#")[1]) {
              link.querySelector("span")?.classList.add("active");
            } else {
              link.querySelector("span")?.classList.remove("active");
            }
          });
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

  return { sectionsRef };
};

export default useIntersectionObserver;
