import styles from './product.module.css'
import Link from 'next/link'
import Image from 'next/image'
import k1 from '@/../public/k1.webp';
import k2 from '@/../public/k2.webp';

const options = [
    {
        img: k1,
        title: 'Beam & Block Slab',
    },
    {
        img: k2,
        title: 'Precast Wall Panels',
    },
];

export default function Product() {
    return (
        <div className={styles.product}>
            <div className={styles.productHead}>
                <h1>Lower Costs, Less Stress,<br /> Faster Completion - <span>Better Results Every Time!</span></h1>
                <div>
                    <p>Whether you're an experienced builder or a self-builder, our Block & Beam solution delivers faster timelines, less hassle, and significant cost savings.</p>
                    <Link href="/Contact">Get a Quote</Link>
                </div>
            </div>

            <div className={styles.box}>
                {options.map((item, index) => (
                    <Link key={index} href='/What' className={styles.card}>
                        <Image src={item.img} alt={item.title} width={400} height={400} />
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <p>Know more</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}