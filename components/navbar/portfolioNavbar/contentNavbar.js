"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';
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
    subLinks: [
      {
        id: 12,
        title: 'Graphic Design',
        url: '/portfolio/freelance/graphicDesign',
      },
      {
        id: 13,
        title: 'Photography',
        url: '/portfolio/freelance/photo',
      },
      {
        id: 14,
        title: 'Web Development',
        url: '/portfolio/freelance/webdev',
      },
    ],
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
  const navbarRef = useRef();

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

  const closeSubMenus = () => {
    setOpenMenus([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeSubMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderSubMenu = (subLinks) => {
    return (
      <div className={styles.subMenu}>
        {subLinks.map((subLink) => (
          <div key={subLink.id} className={styles.subMenuLinkWrapper}>
            <div className={styles.sublinkSubmenuWrapper}>
              <Link href={subLink.url}>
                <div className={styles.subMenuLink}>{subLink.title}</div>
              </Link>
              {subLink.subLinks && (
                <button
                  className={styles.arrowButtonSubmenu}
                  onClick={() => toggleSubMenu(subLink.id)}
                >
                  {isSubMenuOpen(subLink.id) ? (
                    <FaMinus className={styles.plusMinusIcon} />
                  ) : (
                    <FaPlus className={styles.plusMinusIcon} />
                  )}
                </button>
              )}
            </div>
            <div className={styles.container2ndSubLink}>
              {isSubMenuOpen(subLink.id) &&
                subLink.subLinks &&
                renderSubMenu(subLink.subLinks)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container} ref={navbarRef}>
      <div className={styles.links}>
        {links.map((link) => (
          <div key={link.id} className={styles.linkWrapper}>
            <div className={styles.mainMenu}>
                <Link href={link.url}>
                <div className={styles.linkButton}>{link.title}</div>
                </Link>
                <div className={styles.sublinkWrapper}>
                {link.subLinks && (
                    <button
                    className={styles.arrowButton}
                    onClick={() => toggleSubMenu(link.id)}
                    >
                    {isSubMenuOpen(link.id) ? (
                        <FaMinus className={styles.plusMinusIcon} />
                    ) : (
                        <FaPlus className={styles.plusMinusIcon} />
                    )}
                    </button>
                )}
                </div>
            </div>
            {isSubMenuOpen(link.id) && link.subLinks && (
                <div className={styles.FstSubmenu}>
                  {renderSubMenu(link.subLinks)}
                </div>
              )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentNavbar;
