"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { getspecialProjectPageCategories, getspecialProjectPages } from '@/sanity/sanity-utils'
import BlockContent from '@sanity/block-content-to-react';
import { client } from '@/lib/client'

const Page = () => {
  const [specialProjectPageCategories, setSpecialProjectPageCategories] = useState([]);
  const [specialProjectPages, setSpecialProjectPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specialProjectPageCategoriesData = await getspecialProjectPageCategories();
        console.log('specialProjectPageCategories:', specialProjectPageCategoriesData);
        setSpecialProjectPageCategories(specialProjectPageCategoriesData);

        const specialProjectPagesData = await getspecialProjectPages();
        console.log('specialProjectPagesData:', specialProjectPagesData);
        setSpecialProjectPages(specialProjectPagesData);
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
          {specialProjectPages.map((specialProjectPage) => (
            <div key={specialProjectPage.id}>
              <div className={styles.bannerImage}>
                {specialProjectPage.image && (
                  <Image
                    src={specialProjectPage.image}
                    alt={specialProjectPage.name}
                    fill={true}
                  />
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {specialProjectPage.title}
                </div>
                {/* <div className={styles.desc}>
                  Description
                </div> */}
                <div className={styles.descTxt}>
                <BlockContent blocks={specialProjectPage.description} />
                </div>
              </div>

              <div className={styles.featTitle}>
                {specialProjectPage.subtitle}
              </div>

              <div className={styles.featDescTxt}>
              <BlockContent blocks={specialProjectPage.details} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featContent}>
            <div className={styles.featCategoryboxContainer}>
            {specialProjectPageCategories.map((specialProjectPageCategory) => (
               <>
                <div className="grid grid-cols-3 gap-5">
                        <div className={styles.featCategorybox}>
                        {specialProjectPageCategory.feature_image1 && (
                            <Image
                            src={specialProjectPageCategory.feature_image1}
                            alt={specialProjectPageCategory.feature_image1.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {specialProjectPageCategory.feature_image2 && (
                            <Image
                            src={specialProjectPageCategory.feature_image2}
                            alt={specialProjectPageCategory.feature_image2.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {specialProjectPageCategory.feature_image3 && (
                            <Image
                            src={specialProjectPageCategory.feature_image3}
                            alt={specialProjectPageCategory.feature_image3.alt}
                            fill={true}
                            />
                        )}
                        </div>
                </div>
                <div className={styles.viewBtn}>
                    {specialProjectPageCategory.feature_image1 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/activity`}
                        className={styles.featCatBtn}
                    >
                        View Activities
                    </Link>
                  
                    )}
                    {specialProjectPageCategory.feature_image2 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/challenge`}
                        className={styles.featCatBtn}
                    >
                        View Challenges
                    </Link>
                    )}

                    {specialProjectPageCategory.feature_image3 && (
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
