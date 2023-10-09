"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Page = () => {
  const [bootcampCategories, setBootcampCategories] = useState([]);
  const [bootcampPages, setBootcampPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bootcampCategoriesData = await getbootcampCategories();
        console.log('bootcampCategoriesData:', bootcampCategoriesData);
        setBootcampCategories(bootcampCategoriesData);

        const bootcampPagesData = await getbootcampPages();
        console.log('bootcampPagesData:', bootcampPagesData);
        setBootcampPages(bootcampPagesData);
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
          {bootcampPages.map((bootcampPage) => (
            <div key={bootcampPage.id}>
              <div className={styles.bannerImage}>
                {bootcampPage.image && (
                  <Image
                    src={bootcampPage.image}
                    alt={bootcampPage.name}
                    fill={true}
                  />
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {bootcampPage.title}
                </div>
                {/* <div className={styles.desc}>
                  Description
                </div> */}
                <div className={styles.descTxt}>
                <BlockContent blocks={bootcampPage.description} />
                </div>
              </div>

              <div className={styles.featTitle}>
                {bootcampPage.subtitle}
              </div>

              <div className={styles.featDescTxt}>
              <BlockContent blocks={bootcampPage.details} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featContent}>
            <div className={styles.featCategoryboxContainer}>
            {bootcampCategories.map((bootcampCategory) => (
               <>
                <div className="grid grid-cols-3 gap-5">
                        <div className={styles.featCategorybox}>
                        {bootcampCategory.feature_image1 && (
                            <Image
                            src={bootcampCategory.feature_image1}
                            alt={bootcampCategory.feature_image1.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {bootcampCategory.feature_image2 && (
                            <Image
                            src={bootcampCategory.feature_image2}
                            alt={bootcampCategory.feature_image2.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {bootcampCategory.feature_image3 && (
                            <Image
                            src={bootcampCategory.feature_image3}
                            alt={bootcampCategory.feature_image3.alt}
                            fill={true}
                            />
                        )}
                        </div>
                </div>
                <div className={styles.viewBtn}>
                    {bootcampCategory.feature_image1 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/activity`}
                        className={styles.featCatBtn}
                    >
                        View Activities
                    </Link>
                  
                    )}
                    {bootcampCategory.feature_image2 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/challenge`}
                        className={styles.featCatBtn}
                    >
                        View Challenges
                    </Link>
                    )}

                    {bootcampCategory.feature_image3 && (
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
