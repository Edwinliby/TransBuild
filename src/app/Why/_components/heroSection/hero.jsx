import styles from './hero.module.css';
import Image from 'next/image';
import wh1 from '@/../public/wh1.webp';
import wh2 from '@/../public/wh2.webp';
import wh3 from '@/../public/wh3.webp';

const data = [
    {
        img: wh1,
        title: 'Engineered Solution',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
    },
    {
        img: wh2,
        title: 'Free Value Engineering',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
    },
    {
        img: wh3,
        title: 'Free Installation Training',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
    },
]

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1>Why use TransBuild</h1>
            <div className={styles.box}>
                {
                    data.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <Image src={item.img} alt="Image" width={400} height={400} />
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
