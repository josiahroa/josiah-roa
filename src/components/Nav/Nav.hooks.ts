import { useState, useEffect } from "react";

export const useDetermineActive = (id: string) => {
  const [isActive, setIsActive] = useState(window.location.hash === `#${id}`);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === `#${id}`);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [window.location.hash]);

  return isActive;
};
