import { CSSProperties } from "react";

type Props = {
  name?: string;
  picture: string;
  link?: string;
  style?: CSSProperties;
};

const Avatar = ({ name, picture, link, style = {} }: Props) => {
  return (
    <div className="flex items-center justify-between" style={style}>
      <a href={link ?? picture}>
        <img src={picture} className="w-12 h-12 rounded-full" alt={name} />
      </a>
      <div className="text-xl font-bold ">{name}</div>
    </div>
  );
};

export default Avatar;
