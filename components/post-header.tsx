import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 max-w-6xl mx-auto">
        <Avatar
          name={author.name}
          picture={author.picture}
          style={{ gap: 12 }}
        />
        <div className="mb-6 text-lg ml-auto">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
