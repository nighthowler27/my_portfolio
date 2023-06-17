"use client"
import React, { useState } from 'react';
import styles from './footer.module.css';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const [scaledIcon, setScaledIcon] = useState(null);

  const handleIconClick = (icon) => {
    if (scaledIcon === icon) {
      setScaledIcon(null);
    } else {
      setScaledIcon(icon);
    }
  };

  const isIconScaled = (icon) => {
    return scaledIcon === icon ? styles.scaled : '';
  };

  return (
    <div className={styles.container}>
      <div className={styles.copyText}>
        Copyright ©️ 2023 • <strong>STEPH CABUNILAS</strong> • All right reserved.
      </div>
      <div className={styles.socIcons}>
        <AiFillFacebook
          className={`${styles.icons} ${isIconScaled('facebook')}`}
          onClick={() => handleIconClick('facebook')}
        />
        <AiFillGithub
          className={`${styles.icons} ${isIconScaled('github')}`}
          onClick={() => handleIconClick('github')}
        />
        <FaDiscord
          className={`${styles.icons} ${isIconScaled('discord')}`}
          onClick={() => handleIconClick('discord')}
        />
      </div>
    </div>
  );
};

export default Footer;

