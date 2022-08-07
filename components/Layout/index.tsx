import { getLocalStorageItem, saveLocalStorageItem } from "@/lib/storage";

import Alert from "../alert";
import Footer from "@/components/Footer";
import Meta from "../meta";
import { darkThemeModeAtom } from "@/store";
import { setThemeVariables } from "@/lib/theme";
import styles from "./index.module.scss";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { useEffect } from "react";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(darkThemeModeAtom);

  useEffect(() => {
    // 设置全局样式变量
    setThemeVariables(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // useEffect(() => {
  //   toast(
  //     " ⚰️ 源代码埋在 https://github.com/Developer27149/typescript_as_life"
  //   );
  // });

  return (
    <div className={styles.main}>
      <Meta />
      <div>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
