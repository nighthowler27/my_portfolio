"use client"
import styles from './page.module.css';
import { getportfolioKodegoProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import BlockContent from '@sanity/block-content-to-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolioKodegoProjects, setPortfolioKodegoProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioKodegoProjectsData = await getportfolioKodegoProjects();
        setPortfolioKodegoProjects(portfolioKodegoProjectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (portfolioKodegoProject) => {
    setSelectedProject(portfolioKodegoProject);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
        <h1>Kodego Projects</h1>
        <div className={styles.CardInfoContainer}>
            <h1 className={styles.header}>Full Stack Web Development</h1>
            <div className={styles.appIcons}>
                <span> Application used:</span>

                <div className={styles.iconBox}>
                        
                    <Image src="/icons/htmlIcon.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/cssIcon.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/jsIcon.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/reactIcon.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/nextJs.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/mongoDBicon.png" alt="htmlIcon.png" width={50} height={50} />

                    <Image src="/icons/googleDev.png" alt="htmlIcon.png" width={120} height={50} />

                    <Image src="/icons/aws_s3.png" alt="htmlIcon.png" width={110} height={50} />

                    <Image src="/icons/sanityIO.png" alt="htmlIcon.png" width={110} height={50} />

                    <Image src="/icons/stripeLogo.png" alt="htmlIcon.png" width={100} height={50} />
                </div>
            </div>

            <div className={styles.Cards + " mt-5 grid grid-cols-3 gap-8"}>
                {portfolioKodegoProjects.map((portfolioKodegoProject) => (
                <div key={portfolioKodegoProject._id} className={styles.mainContainer}>
                    <div className={styles.background}>
                    <div className={styles.screen_container}>
                        <div className={styles.screen}>
                        <div className={styles.screenHeader}>
                            <div className={styles.screenHeaderLeft}>
                            <div className={`${styles.screenHeaderButton} ${styles.close}`}></div>
                            <div className={`${styles.screenHeaderButton} ${styles.maximize}`}></div>
                            <div className={`${styles.screenHeaderButton} ${styles.minimize}`}></div>
                            </div>
                            <div className={styles.screenHeaderRight}>
                            <div className={styles.screenHeaderEllipsis}></div>
                            <div className={styles.screenHeaderEllipsis}></div>
                            <div className={styles.screenHeaderEllipsis}></div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.miniScreen}>
                            <div className={styles.imageContainer}>
                                {portfolioKodegoProject.image && (
                                <Image
                                    src={portfolioKodegoProject.image}
                                    alt={portfolioKodegoProject.name}
                                    fill={true}
                                    className={styles.image}
                                />
                                )}
                            </div>

                            <div className={styles.textBox}>
                                <h1>{portfolioKodegoProject.name}</h1>
                                <button type="button" className={styles.portBtn} onClick={() => openModal(portfolioKodegoProject)}>
                                View
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalBanner}>
                            {selectedProject.image && (
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    width={750}
                                    height={300}
                                />
                            )}
                        </div>
                        <div className={styles.modalContent}>                   
                            {selectedProject && (
                            <>
                                <div className={styles.modalLeft}>
                                    <h2>{selectedProject.name}</h2>
                                    <h2>Group Name: {selectedProject.group_name}</h2>
                                    <h2>Date Started: {selectedProject.date_started}</h2>
                                    <h2>Date Completed: {selectedProject.date_completed}</h2>
                                    <h2>Contributors/Members:</h2>
                                    
                                </div>
                                <div className={styles.modalRight}>
                                    <div className="modalRightContent">
                                        <div className="RigthTitle">
                                            <h2>Description</h2>
                                            <div>
                                            {selectedProject.content && (
                                            <BlockContent blocks={selectedProject.content} />
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )}
                        </div>

                        <div className={styles.modalBtn}>
                            <span className={styles.closeBtn} onClick={closeModal} >Close</span>
            
                            <div className={styles.webLinks}>
                                <a href={selectedProject.git_repository} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <span>Github Repository</span>
                                    <span><AiFillGithub /> </span>                 
                                </a>
                                
                                 
                                <a href={selectedProject.live_link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <span>Live Link</span>
                                    <span><GoLinkExternal /></span>
                                </a>
                                
                            
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

