import styles from './faq.module.css'
import FaqBox from './_components/faqBox'
import Form from './_components/form'

export default function Faq() {
    return (
        <div className={styles.faq}>
            <Form />
            <FaqBox />
        </div >
    )
}