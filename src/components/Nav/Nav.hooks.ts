import { useState, useEffect } from "react";

export const useDetermineActive = (id: string) => {
  const [isActive, setIsActive] = useState(window.location.hash === `#${id}`);

  useEffect(() => {
    const handleHashChange = () => {
      const isRootPath =
        window.location.pathname === "/" &&
        window.location.hash === "" &&
        id === "home";
      if (isRootPath) {
        return setIsActive(true);
      }

      setIsActive(window.location.hash === `#${id}`);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [window.location.pathname, window.location.hash]);

  return isActive;
};
