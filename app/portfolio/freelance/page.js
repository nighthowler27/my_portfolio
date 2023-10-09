"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Page = () => {
  const [freelanceCategories, setFreelanceCategories] = useState([]);
  const [freelancePages, setFreelancePages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const freelanceCategoriesData = await getfreelanceCategories();
        console.log('freelanceCategoriesData:', freelanceCategoriesData);
        setFreelanceCategories(freelanceCategoriesData);

        const freelancePagesData = await getfreelancePages();
        console.log('freelancePagesData:', freelancePagesData);
        setFreelancePages(freelancePagesData);
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
          {freelancePages.map((freelancePage) => (
            <div key={freelancePage.id}>
              <div className={styles.bannerImage}>
                {freelancePage.image && (
                  <Image
                    src={freelancePage.image}
                    alt={freelancePage.name}
                    fill={true}
                  />
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {freelancePage.title}
                </div>
                {/* <div className={styles.desc}>
                  Description
                </div> */}
                <div className={styles.descTxt}>
                <BlockContent blocks={freelancePage.description} />
                </div>
              </div>

              <div className={styles.featTitle}>
                {freelancePage.subtitle}
              </div>

              <div className={styles.featDescTxt}>
              <BlockContent blocks={freelancePage.details} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featContent}>
            <div className={styles.featCategoryboxContainer}>
            {freelanceCategories.map((freelanceCategory) => (
               <>
                <div className="grid grid-cols-3 gap-5">
                        <div className={styles.featCategorybox}>
                        {freelanceCategory.feature_image1 && (
                            <Image
                            src={freelanceCategory.feature_image1}
                            alt={freelanceCategory.feature_image1.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {freelanceCategory.feature_image2 && (
                            <Image
                            src={freelanceCategory.feature_image2}
                            alt={freelanceCategory.feature_image2.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {freelanceCategory.feature_image3 && (
                            <Image
                            src={freelanceCategory.feature_image3}
                            alt={freelanceCategory.feature_image3.alt}
                            fill={true}
                            />
                        )}
                        </div>
                </div>
                <div className={styles.viewBtn}>
                    {freelanceCategory.feature_image1 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/activity`}
                        className={styles.featCatBtn}
                    >
                        View Activities
                    </Link>
                  
                    )}
                    {freelanceCategory.feature_image2 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/challenge`}
                        className={styles.featCatBtn}
                    >
                        View Challenges
                    </Link>
                    )}

                    {freelanceCategory.feature_image3 && (
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
