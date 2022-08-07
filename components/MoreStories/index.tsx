import type Post from "@/interfaces/post";
import PostPreview from "@/components/post-preview";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
        顾左右而言他
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default MoreStories;
