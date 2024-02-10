"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link} >
            Write
          </Link>
          <span className={styles.link} onClick={signOut} >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/home" className={styles.link1}>Homepage</Link>
          <Link href="/about" className={styles.link1}>About</Link>
          <Link href="/portfolio/index" className={styles.link1}>Portfolio</Link>
          <Link href="/services" className={styles.link1}>Services</Link>
          <Link href="/contact" className={styles.link1}>Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link1}>Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.link1}>Write</Link>
              <span className={styles.link1}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
