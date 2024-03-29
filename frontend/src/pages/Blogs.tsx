import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  // Store it in a state
  // Store it directly here
  // Store it in context variables.....
  // Create our own custom hook called useBlogs()
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorname={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"29th March 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
