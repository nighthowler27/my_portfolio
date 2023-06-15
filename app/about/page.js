import React from 'react'
import styles from "./page.module.css"
import Window from '@/components/window/window'

const About = () => {
  return (
    <div className={styles.mainContainer}>

        <div className={styles.miniWindow1}>
            <Window />
        </div>

        <div className={styles.miniWindow2}>
            <Window />
        </div>

        <div className={styles.miniWindow3}>
            <Window />
        </div>

        {/* <div className={styles.miniWindow4}>
            <Window />
        </div> */}
        

        <div className={styles.firstWindow}>

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
        
                    <div className={styles.screenBody}>
                    <div className={`${styles.screenBodyItem} ${styles.left}`}>
                        <div className={styles.appTitle}>
                        <span className={styles.question}>WHO AM I?</span>

                        </div>
                        <div className={styles.appText}>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error, sunt non vel itaque facere suscipit quam voluptatem sequi placeat quo odit tenetur excepturi recusandae, libero ad, tempora mollitia officia temporibus impedit? Voluptatem doloribus impedit hic corporis fuga? Cum blanditiis illum ducimus saepe? Officiis nisi, ducimus expedita magni magnam ut adipisci doloribus dolores in. Molestiae, officia explicabo esse consequuntur, quia rerum tenetur minima itaque distinctio magni asperiores, sint dignissimos. Consequuntur similique consequatur, labore itaque animi eius sunt quod officia commodi tempora dolores. Quisquam quaerat, nisi, aspernatur quam vero, aperiam a iusto ullam sapiente consequatur ea! At, provident a. Perferendis, doloremque.</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className={styles.secondWindow}>

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
            
                        <div className={styles.screenBody}>
                            <div className={`${styles.screenBodyItem} ${styles.left}`}>
                                <div className={styles.appTitle}>
                                    <span className={styles.question}>
                                        WHAT I DO?
                                    </span>
                                </div>
                                <div className={styles.appText}>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error, sunt non vel itaque facere suscipit quam voluptatem sequi placeat quo odit tenetur excepturi recusandae, libero ad, tempora mollitia officia temporibus impedit? Voluptatem doloribus impedit hic corporis fuga? Cum blanditiis illum ducimus saepe? Officiis nisi, ducimus expedita magni magnam ut adipisci doloribus dolores in. Molestiae, officia explicabo esse consequuntur, quia rerum tenetur minima itaque distinctio magni asperiores, sint dignissimos. Consequuntur similique consequatur, labore itaque animi eius sunt quod officia commodi tempora dolores. Quisquam quaerat, nisi, aspernatur quam vero, aperiam a iusto ullam sapiente consequatur ea! At, provident a. Perferendis, doloremque.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
