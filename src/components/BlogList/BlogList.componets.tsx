interface CardProps {
  blogMetadata: BlogMetadata;
}

export function Card({ blogMetadata }: CardProps) {
  return (
    <div className="w-5/6 mb-12 max-w-96">
      <div id="image-wrapper" className="w-full h-36 bg-red-500 rounded"></div>
      <h3 className="font-bold text-xl">{blogMetadata.title}</h3>
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
