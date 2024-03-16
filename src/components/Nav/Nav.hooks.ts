import { useState, useEffect } from "react";

export const useDetermineActiveItem = (path: string) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const matchRoute = () => {
      setIsActive(window.location.pathname === path);
    };
    matchRoute();

    window.addEventListener("matchRoute", matchRoute);

    return () => window.removeEventListener("hashchange", matchRoute);
  }, [window.location.pathname]);

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
