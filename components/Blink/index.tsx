import { motion } from "framer-motion";
import styles from "./index.module.scss";

export default function Blink(props) {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{ height: [40, 0, 40, 0, 40] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      {props.children}
    </motion.div>
  );
}
