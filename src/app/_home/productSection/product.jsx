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
                <h1>Less Cost, Less Stress, <br /> Less Time! <span>Better Results!</span></h1>
                <div>
                    <p>Whether you are a building professional or first time self builder our Block & Beam solution will save you time, stress and most importantly money.</p>
                    <Link href="#">Get a Quote</Link>
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