import { type ReactNode } from "react";
import { Item, Link } from "./Nav.components";
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
          yOffset > 60 &&
          "transition-background-color ease-in-out duration-500 bg-zinc-800/70 backdrop-blur-sm"
        } transition-background-color ease-in-out duration-500 rounded-lg py-4 px-4 w-[95%] max-w-[600px] flex flex-row justify-around`}
      >
        {children}
      </div>
    </div>
  );
}

Nav.Item = Item;
Nav.Link = Link;
