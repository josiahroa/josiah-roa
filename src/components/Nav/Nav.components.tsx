import { useDetermineActiveItem } from "./Nav.hooks";

interface LinkProps {
  path: string;
  label: string;
}

export function Link({ path, label }: LinkProps) {
  const isActive = useDetermineActiveItem(path);

  return (
    <div>
      <a href={path}>
        <div
          className={`${
            isActive && "bg-zinc-600"
          } transition-background-color ease-in-out duration-200 hover:bg-zinc-600 px-3 md:px-6 lg:px-8 py-2 mx-1 rounded-md`}
        >
          <p className="font-bold text-gray-100 text-xs sm:text-base">
            {label}
          </p>
        </div>
      </a>
    </div>
  );
}
