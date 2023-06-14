import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 4,
        title: "Experience",
        url: "/experience",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {
    
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}> 
        Steph Cabunilas 
        </Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar
