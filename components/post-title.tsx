import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl  md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-16 text-center ">
      {children}
    </h1>
  );
};

export default PostTitle;
