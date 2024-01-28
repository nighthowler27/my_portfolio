import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import { AiFillMail, AiFillFacebook  } from "react-icons/ai";
import { TiPhone } from "react-icons/ti";
import { IoMdPin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>StephCabunilas</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
            <p><AiFillFacebook /></p>
            <p><FaSquareGithub /></p>
            <p><IoLogoDiscord /></p>
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.contactInfo}>
            <div className={styles.contactList}>
                <span className={styles.listTitle}>Contact</span>
                <div>
                    <p><TiPhone /></p> 
                    <span>+63 (02) 8584-3542</span>
                </div>
                <div>
                    <p><AiFillMail /></p>
                    <span>stephcabunilas@gmail.com</span>
                </div>
                <div>
                    <p><IoMdPin /> </p>
                    <span>362H B.Mesa Street, Brgy. Mahabang Parang, Binangonan, Rizal, 1940 PH</span>
                </div>
            </div>
            <div className={styles.contactMap}>
            </div>
        </div>
        <div className={styles.links}>
            <div className={styles.list}>
                <span className={styles.listTitle}>Links</span>
                <Link href="/">Homepage</Link>
                <Link href="/">Blog</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
            
            <div className={styles.list}>
                <span className={styles.listTitle}>Tags</span>
                <Link href="/">Photos</Link>
                <Link href="/">Videos</Link>
                <Link href="/">Layouts</Link>
                <Link href="/">Printing</Link>
            </div>

            <div className={styles.list}>
                <span className={styles.listTitle}>Resources</span>
                <Link href="/">Careers</Link>
                <Link href="/">Term Of Service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Graphic Design Services</Link>
                <Link href="/">Printing Services</Link>
                <Link href="/">Photography Services</Link>
                <Link href="/">Videogrpahy Services</Link>
                <Link href="/">Web Development Services</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
