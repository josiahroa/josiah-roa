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
        <div
          className={`${
            isActive && "bg-zinc-600"
          } transition-background-color ease-in-out duration-200 hover:bg-zinc-600 px-4 py-2 mx-1 rounded-md`}
        >
          <p className="text-gray-100 text-sm">{label}</p>
        </div>
      </a>
    </div>
  );
}

interface LinkProps {
  path: string;
  label: string;
}

export function Link({ path, label }: LinkProps) {
  return (
    <div>
      <a href={path}>
        <div
          className={
            "transition-background-color ease-in-out duration-200 hover:bg-zinc-600 px-4 py-2 mx-1 rounded-md"
          }
        >
          <p className="text-gray-100 text-sm">{label}</p>
        </div>
      </a>
    </div>
  );
}
