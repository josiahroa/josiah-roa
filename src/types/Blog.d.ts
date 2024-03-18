type Blog = {
  metadata: BlogMetadata;
};

type BlogMetadata = {
  title: string;
  imageUri: string;
  tags: Tag[];
};
