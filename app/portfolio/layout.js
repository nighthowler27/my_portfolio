import styles from './page.module.css'
import ContentNavbar from '@/components/navbar/portfolioNavbar/contentNavbar';
import ContentNavbarV2 from '@/components/navbar/portfolioNavbarV2/contentNavbarV2';

export default function PortfolioContents({ children }) {
  return (
    <div className={styles.portfolioBodyContainer}>
        <div className={styles.contentNav}>
            {/* <ContentNavbar /> */}
            <ContentNavbarV2 />
        </div>
        <div className={styles.portfolioContents}>
            <div className={styles.portfolioBodyContents}>   
                {children}
            </div>
        </div>
    </div>
  )
}
