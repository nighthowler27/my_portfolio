import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>

      <div className={styles.bannerImage}>
        <div>BANNER SECTION</div>
      </div>

      <div className={styles.header}>
        <div className={styles.headerTitle}>TITLE HERE</div>
        <div className={styles.desc}>Description</div>
        <div className={styles.descTxt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae et esse dolorem maxime tenetur nisi quia commodi corrupti dicta? Quibusdam recusandae doloremque, officia modi sed praesentium repellendus aspernatur nulla, accusamus cum dicta voluptatibus pariatur error id mollitia et architecto veritatis dolorem tenetur repudiandae! Praesentium sed nostrum voluptates aliquid est.</div>
      </div>

      <div className={styles.featSection}>
        <div className={styles.featTitle}>FEATURE TITLE HERE</div>
        <div className={styles.featDescTxt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae et esse dolorem maxime tenetur nisi quia commodi corrupti dicta? Quibusdam recusandae doloremque, officia modi sed praesentium repellendus aspernatur nulla, accusamus cum dicta voluptatibus pariatur error id mollitia et architecto veritatis dolorem tenetur repudiandae! Praesentium sed nostrum voluptates aliquid est.</div>
        <div className={styles.featContent}>
            <div className={styles.featCategorybox}>Feature Categeory 1</div>
            <div className={styles.featCategorybox}>Feature Categeory 2</div>
            <div className={styles.featCategorybox}>Feature Categeory 3</div>
        </div>

        <div className={styles.viewBtn}>
            <Link href={'/'} className={styles.featCatBtn}>
                View More Activities
            </Link>

            <Link href={'/'} className={styles.featCatBtn}>
                View More Challenges
            </Link>

            <Link href={'/'} className={styles.featCatBtn}>
                View More Projects
            </Link>
        </div>

      </div>
    </div>
  )
}

export default page
