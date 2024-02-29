import { useDetermineActive } from "./Nav.hooks";

interface ItemProps {
  id: string;
  label: string;
}

export function Item({ id, label }: ItemProps) {
  const isActive = useDetermineActive(id);

  return (
    <div>
      <a href={`#${id}`}>
        <div
          className={`${
            isActive ? "bg-green-200" : "bg-red-200"
          } px-4 py-2 rounded-md`}
        >
          {label}
        </div>
      </a>
    </div>
  );
}
