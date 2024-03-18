import { Card } from "./BlogList.componets";

const blogMockData = [
  {
    metadata: {
      title: "How It All Goes Live: An Overview of Streaming Technology",
      tags: [{ name: "Systems Design" }],
      imageUri: "",
    },
  },
  {
    metadata: {
      title: "How It All Goes Live: An Overview of Streaming Technology",
      tags: [{ name: "Systems Design" }],
      imageUri: "",
    },
  },
  {
    metadata: {
      title: "How It All Goes Live: An Overview of Streaming Technology",
      tags: [{ name: "Systems Design" }],
      imageUri: "",
    },
  },
  {
    metadata: {
      title: "How It All Goes Live: An Overview of Streaming Technology",
      tags: [{ name: "Systems Design" }],
      imageUri: "",
    },
  },
];

export default function BlogList() {
  return (
    <div
      id="blog-list-wrapper"
      className="flex flex-col w-full justify-center items-center"
    >
      {blogMockData &&
        blogMockData.map((blog) => <Card blogMetadata={blog.metadata} />)}
    </div>
  );
}
