import styles from './hero.module.css';
import Image from 'next/image';
import wh1 from '@/../public/wh1.webp';
import wh2 from '@/../public/wh2.webp';
import wh3 from '@/../public/wh3.webp';

const data = [
    {
        img: wh2,
        title: 'Free Value Engineering',
        desc: 'We offer expert design analysis to optimize your project for cost-effectiveness and efficiency. Our team provides tailored recommendations to enhance structural performance while reducing material waste and expenses.'
    },
    {
        img: wh1,
        title: 'Engineered Solution',
        desc: 'Our precast Beam & Block Slab system ensures durability, efficiency, and cost savings. Designed for strength and ease of use, it eliminates the need for complex formwork and propping, making construction faster and more reliable.'
    },
    {
        img: wh3,
        title: 'Free Installation Training',
        desc: 'Get hands-on guidance from our experts to ensure seamless installation. We equip builders and contractors with the necessary skills and knowledge to complete projects efficiently and with confidence.'
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
                            <Image src={item.img} alt="Image" width={100} height={100} />
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
