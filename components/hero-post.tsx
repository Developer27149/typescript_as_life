import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-8"
    >
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div> */}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="mb-4 md:pt-6 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4 second_text_color">
              {excerpt}
            </p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroPost;
