import styles from './common.module.css'
import FaqList from '@/components/Faq/faq';

export function Head() {
    return (
        <div className={styles.head}>
            <h1>Contact us <span>Today</span></h1>
            <p>Ready to Work Together? Build a project with us!</p>
        </div>
    )
}

export function Faq() {
    return (
        <div className={styles.faq}>
            <h1>Frequently asked questions</h1>
            <FaqList />
        </div>
    )
}