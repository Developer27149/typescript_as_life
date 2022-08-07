import {BsGithub, BsMoon, BsSun} from 'react-icons/bs'
import { getLocalStorageItem, saveLocalStorageItem } from '@/lib/storage';
import { useEffect, useState } from "react";

import Blink  from "@/components/Blink";
import { CMS_NAME } from "@/lib/constants";
import Link from 'next/link';
import {TTheme} from '@/interfaces/theme'
import cn from 'classnames';
import {darkThemeModeAtom} from '@/store'
import { motion } from "framer-motion"
import { setThemeVariables } from '@/lib/theme';
import styles from "./index.module.scss";
import { useAtom } from 'jotai';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(darkThemeModeAtom)
  const onToggleIsDarkTheme = () => setIsDarkTheme(!isDarkTheme)
  const [isHiddenMoon, setIsHiddenMoon] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsHiddenMoon(isDarkTheme);
    })
  }, [isDarkTheme])

  return (
    <motion.div initial={{
      opacity: 0,
      x: 100
    }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{duration: 0.5}} className="flex items-center gap-4 py-12 md:mb-12">
      <div className={styles.intro}>
        <span className={styles.symbol}>></span>
        <Link href={"/"}>
        <h1 className='cursor-pointer'>Typescript As Life </h1>
        </Link>
        <Blink>|</Blink>
      </div>
  
    <div className='ml-auto flex gap-8 items-center'>
    {/* nav list */}
    {/* <div className={styles.nav_list}>
      <nav>
        <Link href={'/about'}>关于</Link>
      </nav>
      <nav>
        <Link href={'/contact'}>联系</Link>
      </nav>
    </div> */}
    <a href="https://github.com/Developer27149/typescript_as_life" target="_blank"><BsGithub className='w-6 h-6' /></a>
    <div
     onClick={onToggleIsDarkTheme} className={styles.theme_switch}>
      <span className={cn({'opacity-0': isHiddenMoon}, 'bg-gray-700 p-1 rounded-full')}>
        <BsMoon />
      </span>
      <span className={cn({'opacity-0': !isHiddenMoon}, 'bg-gray-700 text-white p-1 rounded-full')}>
        <BsSun />
      </span>
    </div>
    </div>
    </motion.div>
  );
};

export default Header;
