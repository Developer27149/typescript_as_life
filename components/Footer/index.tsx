import Avatar from "../avatar";
import Container from "../container";
import { EXAMPLE_PATH } from "@/lib/constants";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          {/* <h3 className={styles.title}>Friends</h3> */}
          <div className="mr-auto flex gap-4">
            <Avatar
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
              name="笔者"
              picture="https://avatars.githubusercontent.com/u/23721611?v=4"
              link="https://developer27149.github.io/blog/"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/Developer27149"
              className=" mx-3 bg-black rounded-md  hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              关于我的一切
            </a>
            <p>© 2022 - 源于热爱</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
