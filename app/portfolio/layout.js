import styles from './page.module.css'
import ContentNavbar from '@/components/navbar/portfolioNavbar/contentNavbar';

export default function PortfolioLayout({ children }) {
  return (
    <div className={styles.wrapper}>
         <div className={styles.contentNav}>
            <ContentNavbar />
        </div>
        
        <div className={styles.contents}>
            <div className={styles.portfolioContent}>   
                {children}
            </div>
        </div>
    </div>
  )
}
