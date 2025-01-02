import styles from './adv.module.css'
import { data } from './data'

export default function Adv() {
    return (
        <div className={styles.ad}>
            {data.map((item, i) => (
                <div key={i} className={styles.adItem}>
                    <h2>{item.header}</h2>
                    {item.content.map((item, i) => (
                        <div key={i} className={styles.adContent}>
                            <ul>
                                <li>
                                    <b>{item.title}</b> &nbsp;<span>{item.text}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
