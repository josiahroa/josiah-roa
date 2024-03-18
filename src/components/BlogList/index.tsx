import type { ReactNode } from "react";
import { BlogListCard } from "./BlogList.componets";

interface BlogListProps {
  children: ReactNode;
}

export default function BlogList({ children }: BlogListProps) {
  return <div>{children}</div>;
}

BlogList.Card = BlogListCard;
