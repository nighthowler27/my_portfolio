"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';
import styles from './contentNavbar.module.css';

const links = [
  {
    id: 1,
    title: 'Bootcamp',
    url: '/portfolio/bootcamp',
    subLinks: [
      {
        id: 11,
        title: 'Kodego',
        url: '/portfolio/bootcamp/kodego',
        subLinks: [
          {
            id: 21,
            title: 'Activities',
            url: '/portfolio/bootcamp/kodego/activity',
          },
          {
            id: 22,
            title: 'Challenges',
            url: '/portfolio/bootcamp/kodego/challenge',
          },
          {
            id: 23,
            title: 'Projects',
            url: '/portfolio/bootcamp/kodego/project',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Freelance',
    url: '/portfolio/freelance',
    subLinks: [],
  },
  {
    id: 3,
    title: 'Previous Jobs',
    url: '/portfolio/previousjob',
    subLinks: [],
  },
  {
    id: 4,
    title: 'Special Projects',
    url: '/portfolio/specialproject',
    subLinks: [],
  },
];

const ContentNavbar = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleSubMenu = (id) => {
    if (openMenus.includes(id)) {
      setOpenMenus(openMenus.filter((menuId) => menuId !== id));
    } else {
      setOpenMenus([...openMenus, id]);
    }
  };

  const isSubMenuOpen = (id) => {
    return openMenus.includes(id);
  };

  const renderSubMenu = (subLinks) => {
    return (
      <div className={styles.subMenu}>
        {subLinks.map((subLink) => (
          <div key={subLink.id} className={styles.subLinkWrapper}>
            <Link href={subLink.url}>
              <div className={styles.subLink}>{subLink.title}</div>
            </Link>
            {subLink.subLinks && (
              <button
                className={styles.arrowButton}
                onClick={() => toggleSubMenu(subLink.id)}
              >
                <FaAngleDown
                  className={
                    isSubMenuOpen(subLink.id)
                      ? styles.arrowIconActive
                      : styles.arrowIcon
                  }
                />
              </button>
            )}
            {isSubMenuOpen(subLink.id) && subLink.subLinks && renderSubMenu(subLink.subLinks)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <div key={link.id} className={styles.linkWrapper}>
            <Link href={link.url}>
              <div className={styles.linkButton}>{link.title}</div>
            </Link>
            {link.subLinks && (
              <button
                className={styles.arrowButton}
                onClick={() => toggleSubMenu(link.id)}
              >
                <FaAngleDown
                  className={
                    isSubMenuOpen(link.id)
                      ? styles.arrowIconActive
                      : styles.arrowIcon
                  }
                />
              </button>
            )}
            {isSubMenuOpen(link.id) && link.subLinks && renderSubMenu(link.subLinks)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentNavbar;
