import { useState, useEffect } from "react";

export const useDetermineActiveItem = (path: string) => {
  const [isActive, setIsActive] = useState(window.location.hash === `/${path}`);

  useEffect(() => {
    const handleHashChange = () => {
      const isRootPath =
        window.location.pathname === "/" &&
        window.location.hash === "" &&
        path === "home";
      if (isRootPath) {
        return setIsActive(true);
      }

      const isBlogPath =
        window.location.pathname === "/blog" && path === "/blog";
      console.log(isBlogPath, window.location.pathname);
      if (isBlogPath) {
        return setIsActive(true);
      }

      setIsActive(window.location.hash === `/${path}`);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [window.location.pathname, window.location.hash]);

  return isActive;
};

export const useDetermineYOffset = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
