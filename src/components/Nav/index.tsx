import { type ReactNode } from "react";
import { Item } from "./Nav.components";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <div className="bg-red-500 w-full fixed z-10 flex justify-center">
      <div className="bg-blue-400 w-4/5 max-w-[600px] flex flex-row justify-around">
        {children}
      </div>
    </div>
  );
}

Nav.Item = Item;
