"use client"
import styles from './page.module.css';
import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';


export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold">Hi! This is a test Page!</h1>

      <div className="mt-5 grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className={styles.mainContainer}>
            <div className={styles.background}>
              <div className={styles.container}>
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
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill={true}
                            className={styles.image}
                          />
                        )}
                      </div>

                      <div className={styles.textBox}>
                        <p>{project.name}</p>
                        <button type="button" className={styles.portBtn} onClick={() => openModal(project)}>
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
                                    <p>
                                    {selectedProject.content && (
                                    {selectedProject.content}
                                    )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                    )}
                </div>

                <div className={styles.modalBtn}>
                <span className={styles.closeBtn} onClick={closeModal} >Close</span>
  
                <div className={styles.webLinks}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Github Repository</p>
                    <AiFillGithub />
                  </a>
  
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Live Link</p>
                    <GoLinkExternal />
                  </a>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
