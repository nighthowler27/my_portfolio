import React from 'react'
import styles from './side.module.css'
import Link from 'next/link'

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

const LeftsidePanel = () => {
  return (
    <div className={styles.sideNav}>
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

export default LeftsidePanel
