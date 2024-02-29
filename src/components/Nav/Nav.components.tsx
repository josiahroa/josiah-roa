import { useDetermineActiveItem } from "./Nav.hooks";

interface ItemProps {
  id: string;
  label: string;
}

export function Item({ id, label }: ItemProps) {
  const isActive = useDetermineActiveItem(id);

  return (
    <div>
      <a href={`#${id}`}>
        <div className={`${isActive && "bg-zinc-600"} px-4 py-2 rounded-md`}>
          <p className="text-gray-100">{label}</p>
        </div>
      </a>
    </div>
  );
}
