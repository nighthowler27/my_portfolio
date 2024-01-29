"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/img/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/img/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

// const ThemeToggle = () => {
//     const { toggle, theme } = useContext(ThemeContext);
  
//     let backgroundColor;
//     let ballStyle;
  
//     switch(theme) {
//       case 'dark':
//         backgroundColor = 'white';
//         ballStyle = { left: 1, background: '#0f172a' };
//         break;
//       case 'dark2':
//         backgroundColor = 'white2';
//         ballStyle = { left: 1, background: '#0f172a' };
//         break;
//       default:
//         backgroundColor = '#0f172a';
//         ballStyle = { right: 1, background: 'white' };
//     }
  
//     return (
//       <div
//         className={styles.container}
//         onClick={toggle}
//         style={{ backgroundColor }}
//       >
//         <Image src="/img/moon.png" alt="" width={14} height={14} />
//         <div
//           className={styles.ball}
//           style={ballStyle}
//         ></div>
//         <Image src="/img/sun.png" alt="" width={14} height={14} />
//       </div>
//     );
//   };
  

export default ThemeToggle;

