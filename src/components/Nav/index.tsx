import React, { type ReactNode } from "react";
import { Item } from "./Nav.components";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <div className="bg-red-500 w-full fixed px-10 flex flex-row justify-between z-10">
      {children}
    </div>
  );
}

Nav.Item = Item;
