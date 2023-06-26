"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { getkodegoCategories, getkodegoPages } from '@/sanity/sanity-utils'
import BlockContent from '@sanity/block-content-to-react';
import { client } from '@/lib/client'

const Page = () => {
  const [kodegoCategories, setKodegoCategories] = useState([]);
  const [kodegoPages, setKodegoPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const kodegoCategoriesData = await getkodegoCategories();
        console.log('kodegoCategoriesData:', kodegoCategoriesData);
        setKodegoCategories(kodegoCategoriesData);

        const kodegoPagesData = await getkodegoPages();
        console.log('kodegoPagesData:', kodegoPagesData);
        setKodegoPages(kodegoPagesData);
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
          {kodegoPages.map((kodegoPage) => (
            <div key={kodegoPage.id}>
              <div className={styles.bannerImage}>
                {kodegoPage.image && (
                  <Image
                    src={kodegoPage.image}
                    alt={kodegoPage.name}
                    fill={true}
                  />
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.headerTitle}>
                  {kodegoPage.title}
                </div>
                {/* <div className={styles.desc}>
                  Description
                </div> */}
                <div className={styles.descTxt}>
                <BlockContent blocks={kodegoPage.description} />
                </div>
              </div>

              <div className={styles.featTitle}>
                {kodegoPage.subtitle}
              </div>

              <div className={styles.featDescTxt}>
              <BlockContent blocks={kodegoPage.details} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featContent}>
            <div className={styles.featCategoryboxContainer}>
            {kodegoCategories.map((kodegoCategory) => (
               <>
                <div className="grid grid-cols-3 gap-5">
                        <div className={styles.featCategorybox}>
                        {kodegoCategory.feature_image1 && (
                            <Image
                            src={kodegoCategory.feature_image1}
                            alt={kodegoCategory.feature_image1.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {kodegoCategory.feature_image2 && (
                            <Image
                            src={kodegoCategory.feature_image2}
                            alt={kodegoCategory.feature_image2.alt}
                            fill={true}
                            />
                        )}
                        </div>
                        <div className={styles.featCategorybox}>
                        {kodegoCategory.feature_image3 && (
                            <Image
                            src={kodegoCategory.feature_image3}
                            alt={kodegoCategory.feature_image3.alt}
                            fill={true}
                            />
                        )}
                        </div>
                </div>
                <div className={styles.viewBtn}>
                    {kodegoCategory.feature_image1 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/activity`}
                        className={styles.featCatBtn}
                    >
                        View Activities
                    </Link>
                  
                    )}
                    {kodegoCategory.feature_image2 && (
                    <Link
                        href={`/portfolio/bootcamp/kodego/challenge`}
                        className={styles.featCatBtn}
                    >
                        View Challenges
                    </Link>
                    )}

                    {kodegoCategory.feature_image3 && (
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
