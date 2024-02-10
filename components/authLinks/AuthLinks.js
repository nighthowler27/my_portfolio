"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link} onClick={closeMenu}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link} onClick={closeMenu}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
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
          <Link href="/home" className={styles.link1} onClick={closeMenu}>Homepage</Link>
          <Link href="/about" className={styles.link1} onClick={closeMenu}>About</Link>
          <Link href="/portfolio/index" className={styles.link1} onClick={closeMenu}>Portfolio</Link>
          <Link href="/services" className={styles.link1} onClick={closeMenu}>Services</Link>
          <Link href="/contact" className={styles.link1} onClick={closeMenu}>Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link1} onClick={closeMenu}>Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.link1} onClick={closeMenu}>Write</Link>
              <span className={styles.link1} onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
