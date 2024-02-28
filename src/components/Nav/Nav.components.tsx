import React from "react";

interface ItemProps {
  id: string;
  label: string;
}

export function Item({ id, label }: ItemProps) {
  return (
    <div>
      <a href={`#${id}`}>{label}</a>
    </div>
  );
}
