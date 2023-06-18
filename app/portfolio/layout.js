import { Inter } from 'next/font/google';

import styles from './page.module.css'
import ContentNavbar from '@/components/navbar/portfolioNavbar/contentNavbar';
import Portfolio from './bootcamp/kodego/project/page';

export default function PortfolioLayout({ children }) {
  return (
    <div className={styles.container}>
        <div className={styles.contents}>
            
            <div className={styles.sideNav}>
                <ContentNavbar />
            </div>
           
            <div className={styles.portfolioContent}>   
                {children}
            </div>
        </div>
    </div>
  )
}
