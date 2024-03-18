interface BlogListCardProps {
  blogMetadata: BlogMetadata;
}

export function BlogListCard({ blogMetadata }: BlogListCardProps) {
  return (
    <div>
      <img src={blogMetadata.imageUri} />
      <h3>{blogMetadata.title}</h3>
      {blogMetadata.tags &&
        blogMetadata.tags.length > 0 &&
        blogMetadata.tags.map((tag) => {
          return <Tag tag={tag}></Tag>;
        })}
    </div>
  );
}

interface TagProps {
  tag: Tag;
}

export function Tag({ tag }: TagProps) {
  return (
    <div>
      <p>{tag.name}</p>
    </div>
  );
}
