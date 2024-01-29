"use client"
import React , { useState, useEffect, useRef  } from 'react'
import styles from './contentNavbar.module.css'
import { GiArchiveResearch } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaCircleArrowDown, FaPen } from "react-icons/fa6";
import { CgShapeTriangle } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";


const ContentNavbar = () => {
    const [isOpen, setIsOpen] = useState({});
  
    const handleClickOutside = (event) => {
      if (!event.target.matches('.dropDown')) {
        setIsOpen({});
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); 
  
    const handleClick = (name, event) => {
      event.stopPropagation();
      setIsOpen(prevState => ({ ...prevState, [name]: !prevState[name] }));
    };

  return (
    <div className={styles.menuWrapper}>
        <div className={styles.navMenu}>
            <div className={styles.menuList}>
                <ul>
                    <p>
                        <h1>Education</h1> 
                    
                        <CgShapeTriangle 
                        className={`${styles.dropDown} ${isOpen.education ? styles.rotate : ''}`} 
                        onClick={(event) => handleClick('education',event)}
                        />
                    </p>
                    {isOpen.education && (
                        <div className={styles.subList}>
                            <li><h2>Academe</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Training</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Bootcamp</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <div className={styles.newList}>
                                <p className={styles.plusIcon}><CiCirclePlus /> </p>
                                <p>add another page</p>
                            </div>
                        </div>
                    )}
                </ul>

                <ul>
                    
                    <p>
                    <h1>Education</h1> 
                        <CgShapeTriangle 
                        className={`${styles.dropDown} ${isOpen.freelance ? styles.rotate : ''}`} 
                        onClick={(event) => handleClick('freelance', event)}
                        />
                    </p>
                    {isOpen.freelance && (
                        <div className={styles.subList}>
                            <li><h2>Academe</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Training</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Bootcamp</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <div className={styles.newList}>
                                <p className={styles.plusIcon}><CiCirclePlus /> </p>
                                <p>add another page</p>
                            </div>
                        </div>
                   )}
                </ul>

                <ul>
                    
                    <p>
                    <h1>Education</h1> 
                        <CgShapeTriangle 
                        className={`${styles.dropDown} ${isOpen.recent ? styles.rotate : ''}`} 
                        onClick={(event) => handleClick('recent', event)}
                        />
                    </p>
                    {isOpen.recent && (
                        <div className={styles.subList}>
                            <li><h2>Academe</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Training</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Bootcamp</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <div className={styles.newList}>
                                <p className={styles.plusIcon}><CiCirclePlus /> </p>
                                <p>add another page</p>
                            </div>
                        </div>
                   )}
                   
                </ul>
                <ul>
                    
                    <p>
                    <h1>Education</h1> 
                        <CgShapeTriangle 
                        className={`${styles.dropDown} ${isOpen.previousJob ? styles.rotate : ''}`} 
                        onClick={(event) => handleClick('previousJob', event)}
                        />
                    </p>
                    {isOpen.previousJob && (
                        <div className={styles.subList}>
                            <li><h2>Academe</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Training</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <li><h2>Bootcamp</h2> <p><FaRegEye /> <FaPen /> <RiDeleteBin5Fill /></p></li>
                            <div className={styles.newList}>
                                <p className={styles.plusIcon}><CiCirclePlus /> </p>
                                <p>add another page</p>
                            </div>
                        </div>
                   )}
                </ul>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.searchInput}>
                    <p><GiArchiveResearch /></p>
                    <input type="text" name="Search" id="" placeholder="Search a Project..."/>
                </div>
                <button className={styles.searchBtn} type="submit">Check</button>      
                
            </div>
        </div>
        <div className={styles.tagsOrders}>
            <div className={styles.tags}>
                <ul>
                   <p>Tags</p>
                   <li><p>Academe</p></li>
                   <li><p>Training</p></li>
                   <li><p>Bootcamp</p></li>
                </ul>
            </div>
            <div className={styles.sortOrder}>
                <div><span>Sort by:</span></div>
                <div className={styles.orderList}>
                    <p>Category <FaCircleArrowDown className={styles.sortIcon}/></p>
                    <p>Name <FaCircleArrowDown className={styles.sortIcon}/></p>
                    <p>Date <FaCircleArrowDown className={styles.sortIcon}/></p>
                    <p>Ratings <FaCircleArrowDown className={styles.sortIcon}/></p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ContentNavbar;