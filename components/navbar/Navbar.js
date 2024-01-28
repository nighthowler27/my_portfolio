"use client"
import React, { useState} from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import LoginModal from '../loginModal/loginLayout'
import ThemeToggle from '../themeToggle/ThemeToggle'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/home",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Portfolio",
        url: "/portfolio/index",
    },
    {
        id: 4,
        title: "Services",
        url: "/services",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    // {
    //     id: 6,
    //     title: "Dashboard",
    //     url: "/dashboard",
    // },
];


const Navbar = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    
    const openLoginModal = () => {
    setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
    setLoginModalOpen(false);
    };
    
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}> 
        Steph Cabunilas 
        </Link>

        <ThemeToggle/>

        <div className={styles.navBtn}>
            <div className={styles.links}>
                {links.map(link=>(
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <div className={`${styles.loginBtn}${styles.links}`}>

                <Link href="/login" className={styles.logo}> 
                Login 
                </Link>


                {/* <button type="button" className="loginBtn" onClick={openLoginModal}>Login</button>

                {isLoginModalOpen && (
                    <LoginModal open={isLoginModalOpen} onClose={closeLoginModal}/>
                )} */}
            </div>

        </div>
        
    </div>
  )
}

export default Navbar
