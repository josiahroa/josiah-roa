import { type ReactNode } from "react";
import { Link } from "./Nav.components";
import { useDetermineYOffset } from "./Nav.hooks";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  const yOffset = useDetermineYOffset();

  return (
    <div className="w-full fixed z-10 flex justify-center mt-4">
      <div
        className={`${
          yOffset > 20 &&
          "transition-background-color transition-colors ease-in-out duration-500 bg-zinc-800/70 backdrop-blur-sm border border-zinc-600"
        } ${
          yOffset <= 20 && "border border-zinc-900"
        } transition-background-color transition-colors ease-in-out duration-500 rounded-lg py-4 px-4 w-[95%] max-w-[600px] flex flex-row justify-around `}
      >
        {children}
      </div>
    </div>
  );
}

Nav.Link = Link;
