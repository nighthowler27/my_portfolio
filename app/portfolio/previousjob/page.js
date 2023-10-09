"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Page = () => {
  const [previousProjectCategories, setPreviousProjectCategories] = useState([]);
  const [previousProjectPages, setPreviousProjectPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const previousProjectCategoriesData = await getpreviousProjectCategories();
        console.log('previousProjectCategoriesData:', previousProjectCategoriesData);
        setPreviousProjectCategories(previousProjectCategoriesData);

        const previousProjectPagesData = await getpreviousProjectPages();
        console.log('previousProjectPagesData:', previousProjectPagesData);
        setPreviousProjectPages(previousProjectPagesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.featSection}>
        <div>
          {previousProjectPages.map((previousProjectPage) => (
            <div key={previousProjectPage.id}>
              <div className={styles.bannerImage}>
                {previousProjectPage.image && (
                  <Image
                    src={previousProjectPage.image}
                    alt={previousProjectPage.name}
                    fill={true}
                  />
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {previousProjectPage.title}
                </div>
                {/* <div className={styles.desc}>
                  Description
                </div> */}
                <div className={styles.descTxt}>
                <BlockContent blocks={previousProjectPage.description} />
                </div>
              </div>

              <div className={styles.featTitle}>
                {previousProjectPage.subtitle}
              </div>

              <div className={styles.featDescTxt}>
              <BlockContent blocks={previousProjectPage.details} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featContent}>
            <div className={styles.featCategoryboxContainer}>
            {previousProjectCategories.map((previousProjectCategory) => (
               <>
                <div className="grid grid-cols-3 gap-5">
                        <div className={styles.featCategorybox}>
                        {previousProjectCategory.feature_image1 && (
                            <Image
                            src={previousProjectCategory.feature_image1}
                            alt={previousProjectCategory.feature_image1.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {previousProjectCategory.feature_image2 && (
                            <Image
                            src={previousProjectCategory.feature_image2}
                            alt={previousProjectCategory.feature_image2.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {previousProjectCategory.feature_image3 && (
                            <Image
                            src={previousProjectCategory.feature_image3}
                            alt={previousProjectCategory.feature_image3.alt}
                            fill={true}
                            />
                        )}
                        </div>
                </div>
                <div className={styles.viewBtn}>
                    {previousProjectCategory.feature_image1 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/activity`}
                        className={styles.featCatBtn}
                    >
                        View Activities
                    </Link>
                  
                    )}
                    {previousProjectCategory.feature_image2 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/challenge`}
                        className={styles.featCatBtn}
                    >
                        View Challenges
                    </Link>
                    )}

                    {previousProjectCategory.feature_image3 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/project`}
                        className={styles.featCatBtn}
                    >
                        View Projects
                    </Link>
                    )}

                    </div>

                </>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
