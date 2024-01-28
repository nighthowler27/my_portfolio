"use client"
import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import LoginModal from '../loginModal/loginLayout'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from "../authLinks/AuthLinks";


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
    const [containerColor, setContainerColor] = useState('none');
   
    const openLoginModal = () => {
    setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
    setLoginModalOpen(false);
    };

    useEffect(() => {
        const changeContainerColor = () => {
            var container = document.getElementById('container');
            if (container) {
                if (window.pageYOffset > 50) { // Change '50' to the number of pixels you want
                    setContainerColor('var(--bg)'); // Replace 'red' with your desired color
                } else {
                    setContainerColor('none');
                }
            }
        };

        // Call the function once to set the initial color
        changeContainerColor();

        window.addEventListener('scroll', changeContainerColor);

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', changeContainerColor);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    
  return (
    <div className={styles.container} id="container" style={{ backgroundColor: containerColor }}>
        <div className={styles.wrapper}>
            <Link href="/" className={styles.logo}> 
            Steph Cabunilas 
            </Link>

            <div className={styles.navBtn}>
                <div className={styles.links}>
                    <ThemeToggle />
                    {links.map(link=>(
                        <Link key={link.id} href={link.url} className={styles.link}>
                            {link.title}
                        </Link>
                    ))}
                    <AuthLinks />
                </div>
                {/* <div className={`${styles.loginBtn}${styles.links}`}>

                    <Link href="/login" className={styles.logo}> 
                    Login 
                    </Link>


                    <button type="button" className="loginBtn" onClick={openLoginModal}>Login</button>

                    {isLoginModalOpen && (
                        <LoginModal open={isLoginModalOpen} onClose={closeLoginModal}/>
                    )}
                </div> */}

            </div>
        </div>
        
    </div>
  )
}

export default Navbar
