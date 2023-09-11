"use client"
import React, { useState } from 'react';
import styles from './resume.module.css';
import Image from 'next/image';
import { 
    FaMobileAlt, 
    FaHiking,
    FaSwimmer,
    FaGuitar
    } from 'react-icons/fa';
import { 
    GiRotaryPhone,
    GiCampingTent,
    GiPencilBrush,
    GiBookshelf 
    } from 'react-icons/gi';
import { 
    AiOutlineMail, 
    AiFillLinkedin, 
    AiFillBehanceSquare,
    AiFillHome,
    AiOutlineDownload,
    AiOutlinePrinter,
    AiOutlineShareAlt, 
    } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { 
    SiYoutubegaming, 
    SiYourtraveldottv 
    } from 'react-icons/si';
import { BsFillPuzzleFill } from 'react-icons/bs';


// const skillsData = [
//     ["Photoshop", <div className={styles.percent}><div style={{ width: '80%' }}></div></div>, "80%"],
//     ["Adobe Premiere", <div className={styles.percent}><div style={{ width: '65%' }}></div></div>, "65%"],
//     ["Adobe Illustrator", <div className={styles.percent}><div style={{ width: '70%' }}></div></div>, "70%"],
//   ];

    const ResumeModal = ({ open, onClose, user  }) => {
    // State variables to track the active button
    const [activeButton, setActiveButton] = useState('Graphics'); // Default to 'Graphics'

    // Function to handle button click and update the active button
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

    // Function to update the lastUpdated value when needed
    const updateLastUpdated = () => {
        // You can set this to a new date or any updated information
        const currentDate = new Date().toLocaleString();
        setLastUpdated(currentDate);
    };

    return (
        <>
          {open && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <div className={styles.modalBanner}>
                  <div className={styles.toolBar}>
                    <p className={styles.toolBarDownload}>
                        <AiOutlineDownload />
                    </p>
                    <p className={styles.toolBarPrint}>
                        <AiOutlinePrinter />
                    </p>
                    <p className={styles.toolBarShare}>
                        <AiOutlineShareAlt />
                    </p>
                  </div>
                </div>
  
                <div className={styles.modalContent}>
                    {/* Leftside Section */}
                    <div className={styles.modalLeft}>

                        {/* Profile Section */}
                        <div className={styles.ProfileInfo}>
                            <div className={styles.ProPic}>
                               
                            </div>
                            <div className={styles.ProfileName}>
                                <h1>Stephen M. Cabunilas</h1>
                                <h2>Jack of all Trades</h2>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className={styles.ContactInfo}>
                            <h1>Contact Info</h1>
                            <div className={styles.ContactNumber}>
                                <div className={styles.ContactIcon}>
                                    <h2><FaMobileAlt /></h2>
                                </div>
                                <h3>(+63) 917-4765-836</h3>
                            </div>
                            <div className={styles.ContactNumber}>
                                <div className={styles.ContactIcon}>
                                    <h2><GiRotaryPhone /></h2>
                                </div>
                                <h3>(+63) 028-5843-542</h3>
                            </div>
                            <div className={styles.ContactLink}>
                                <div>
                                <div className={styles.ContactIcon}>
                                    <h2><AiOutlineMail /></h2>
                                </div>
                                <h3>stephcabunilas@hotmail.com</h3>
                                </div>

                                <div>
                                <div className={styles.ContactIcon}>
                                    <h2><BsGlobe /></h2>
                                </div>
                                <h3>stephcabunilas.pro</h3>
                                </div>

                                <div>
                                <div className={styles.ContactIcon}>
                                    <h2><AiFillLinkedin /></h2>
                                </div>
                                <h3>stephcabunilas@hotmail.com</h3>
                                </div>

                                <div>
                                <div className={styles.ContactIcon}>
                                    <h2><AiFillBehanceSquare /></h2>
                                </div>
                                <h3>stephcabunilas@hotmail.com</h3>
                                </div>
                            </div>

                            <div className={styles.ContactAddress}>
                                <div className={styles.ContactIcon}>
                                    <h2><AiFillHome /></h2>
                                </div>
                                <span>
                                    <h3>Blk 6 Lot3, #362H B.Mesa Street,</h3>
                                    <h3>Brgy. Mahabang Parang, Binangonan, Rizal, 1940</h3>
                                </span>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className={styles.EducSec}>
                            <h1>Education</h1>
                            <div className={styles.EducInfo}>
                                <p>Feb. 27 - May 31, 2023</p>
                                <h2>Full Stack Web Development</h2>
                                <h3>Kodego</h3>
                                <p>Online Bootcamp</p>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>2011 - 2014</p>
                                <h2>Bachelor of Science in Marine Transportation</h2>
                                <h3>Technological Institute of the Philippines</h3>
                                <p>Quiapo, Manila</p>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>2007 - 2011</p>
                                <h2>Secodary School</h2>
                                <h3>Mahabang Parang National Highschool</h3>
                                <p>Binangonan, Rizal</p>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>2000-2006</p>
                                <h2>Primary School</h2>
                                <h3>Casimiro A. Ynares Sr. Elementary School</h3>
                                <p>Binangonan, Rizal</p>
                            </div>
                        </div>

                        {/* Language Section */}
                        <div className={styles.Language}>
                            <h1>Language</h1>
                            <div className={styles.LanInfo}>
                                <p>English</p>
                                <div className={styles.langBar}>
                                    <div className={styles.percent}>
                                        <div style={{ width: '80%' }}></div>
                                    </div>
                                    <div className={styles.langGrade}>
                                        <p>Poor</p>
                                        <p>Fair</p>
                                        <p>Fluent</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.LanInfo}>
                                <p>Filipino-Tagalog</p>
                                <div className={styles.langBar}>
                                    <div className={styles.percent}>
                                        <div style={{ width: '100%' }}></div>
                                    </div>
                                    <div className={styles.langGrade}>
                                        <p>Poor</p>
                                        <p>Fair</p>
                                        <p>Fluent</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.LanInfo}>
                                <p>Cebuano-Bisaya</p>
                                <div className={styles.langBar}>
                                    <div className={styles.percent}>
                                        <div style={{ width: '60%' }}></div>
                                    </div>
                                    <div className={styles.langGrade}>
                                        <p>Poor</p>
                                        <p>Fair</p>
                                        <p>Fluent</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interest Section */}
                        <div className={styles.Interest}>
                            <h1>Interest</h1>
                            <div className={styles.InterestList}>
                                <div className={styles.InterestInfo}>
                                    <h2><FaHiking /></h2>
                                    <h3>Hiking</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><FaGuitar /></h2>
                                    <h3>Music</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><GiCampingTent /></h2>
                                    <h3>Camping</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><GiPencilBrush /></h2>
                                    <h3>Arts</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><FaSwimmer /></h2>
                                    <h3>Swimming</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><SiYourtraveldottv /></h2>
                                    <h3>Travel</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><GiBookshelf /></h2>
                                    <h3>Reading</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><BsFillPuzzleFill /></h2>
                                    <h3>Solving Puzzle</h3>
                                </div>
                                <div className={styles.InterestInfo}>
                                    <h2><SiYoutubegaming /></h2>
                                    <h3>Gaming</h3>
                                </div>
                                
                            </div>
                        </div>

                        <Image
                            src="/img/fog_bg.jpg"
                            fill={true}
                            className={styles.BGimage}
                        />

                    </div>

                    {/* Rightside Section */}
                    <div className={styles.modalRight}>
                    
                        {/* Profile Description */}
                        <div className={styles.ProfileDesc}>
                            <h1>Profile</h1>
                            <div className={styles.ProfileNarative}>
                                <p>Profile Description</p>
                            </div> 
                        </div>

                        {/* Experiences Section*/}
                        <div className={styles.Experience}>
                            <h1>Work Experience</h1>
                            <div className={styles.ExpList}>
                                <div className={styles.ExpInfo}>
                                    <div className={styles.ExpInfoLeft}>
                                        <div className={styles.ExpDate}>
                                            <p>Date</p>
                                        </div>
                                        <div className={styles.ExpCompany}>
                                            <p>Copmany Name</p>
                                        </div>
                                    </div>
                                    <div className={styles.ExpInfoRight}>
                                        <div className={styles.ExpPosition}>
                                            <p>Tittle</p>
                                        </div>
                                        <div className={styles.ExpPosDesc}>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ExpInfo}>
                                    <div className={styles.ExpInfoLeft}>
                                        <div className={styles.ExpDate}>
                                            <p>Date</p>
                                        </div>
                                        <div className={styles.ExpCompany}>
                                            <p>Copmany Name</p>
                                        </div>
                                    </div>
                                    <div className={styles.ExpInfoRight}>
                                        <div className={styles.ExpPosition}>
                                            <p>Tittle</p>
                                        </div>
                                        <div className={styles.ExpPosDesc}>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className={styles.SkillsSec}>
                            <h1>Professional Skills</h1>
                            <div className={styles.skillBTN}>
                                <button
                                className={`${styles.GraphBTN} ${
                                    activeButton === 'Graphics' ? styles.active : ''
                                }`}
                                onClick={() => handleButtonClick('Graphics')}
                                >
                                    Graphics
                                </button>
                                <button
                                className={`${styles.WebBTN} ${
                                    activeButton === 'Web Development' ? styles.active : ''
                                }`}
                                onClick={() => handleButtonClick('Web Development')}
                                >
                                    Web Development
                                </button>
                            </div>

                            <div className={styles.skillTable}>
                                {/* Skill Table 1 */}
                                {activeButton === 'Graphics' && (
                                <div className={styles.skillBar}>
                                    {/* <table>
                                        <tbody>
                                            {skillsData.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((column, columnIndex) => (
                                                <td
                                                    key={columnIndex}
                                                    className={
                                                        columnIndex === 0 ? styles.firstColumn : columnIndex === 1 ? styles.secondColumn : styles.thirdColumn
                                                    }
                                                >
                                                    {column}
                                                </td>
                                                ))}
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table> */}

                                    {/* <div className={styles.skillname}>
                                        <div>Adobe Photoshop</div>
                                        <div>Adobe Premiere</div>
                                        <div>Adobe After Effects</div>
                                        <div>Adobe Illustator</div>
                                        <div>Adobe Indesign</div>
                                        <div>Adobe Audition</div>
                                    </div>

                                    <div className={styles.skillrate}>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '60%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '70%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '75%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '65%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.skillscore}>
                                        <div>80%</div>
                                        <div>60%</div>
                                        <div>70%</div>
                                        <div>75%</div>
                                        <div>65%</div>
                                        <div>80%</div>
                                    </div> */}

                                    <div className={styles.skillname}>
                                        <div>Adobe Photoshop</div>
                                        <div>Adobe Premiere</div>
                                        <div>Adobe After Effects</div>
                                        <div>Adobe Illustator</div>
                                        <div>Adobe Indesign</div>
                                        <div>Adobe Audition</div>
                                    </div>

                                    <div className={styles.skillrate}>
                                        <div className={styles.percent}>
                                            <div style={{ width: '90%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '70%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '60%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '75%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '85%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.skillscore}>
                                        <div>90%</div>
                                        <div>70%</div>
                                        <div>60%</div>
                                        <div>75%</div>
                                        <div>85%</div>
                                        <div>80%</div>
                                    </div>
                                </div>
                                )}

                                {/* Skill Table 2  */}
                                {activeButton === 'Web Development' && (
                                <div className={styles.skillBar1}>
                                <div className={styles.skillname}>
                                        <div>HTML</div>
                                        <div>Javascript</div>
                                        <div>CSS</div>
                                        <div>React</div>
                                        <div>Next Js</div>
                                        <div>Mongo DB</div>
                                        <div>MySQL</div>
                                        <div>Sanity IO</div>
                                        <div>Amazon S3</div>
                                    </div>

                                    <div className={styles.skillrate}>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '60%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '70%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '75%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '65%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '75%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '65%' }}></div>
                                        </div>
                                        <div className={styles.percent}>
                                            <div style={{ width: '80%' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.skillscore}>
                                        <div>80%</div>
                                        <div>60%</div>
                                        <div>70%</div>
                                        <div>75%</div>
                                        <div>65%</div>
                                        <div>80%</div>
                                        <div>75%</div>
                                        <div>65%</div>
                                        <div>80%</div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                                   
                    </div>
                </div>

                <div className={styles.modalFooter}>
                    {user && user.role === 'admin' && (
                        <button type="button" onClick={updateLastUpdated} className={styles.UpdateBTN}>
                        Update
                        </button>
                    )}
                    {/* <button type="button" onClick={updateLastUpdated} className={styles.UpdateBTN}>
                        Update 
                    </button> */}
                    <p>latest updated version : {lastUpdated}</p>
                </div>
    
                <div className={styles.modalBtn}>
                  <button type="button" className={styles.closeBtn} onClick={onClose}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

export default ResumeModal;
