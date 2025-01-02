import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/../public/herobg.webp';
import Shape from '@/../public/shape.svg';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Efficient, sustainable, and scalable construction solutions</h1>
                <p>Are you a builder, contractor, architect, or homebuilder looking for sustainable, cost-effective solutions?</p>
                <div>
                    <Link className={styles.book} href='#'>Book Appointment</Link>
                    <Link className={styles.learn} href='/What'>Learn more</Link>
                </div>
            </div>
            <div className={styles.heroImg}>
                <Image
                    src={heroImage}
                    alt='hero image'
                    width={2000}
                    height={2000}
                    className={styles.heroBg}
                />
                <Image
                    src={Shape}
                    alt='hero image'
                    width={100}
                    height={100}
                    className={styles.shape1}
                />
                <Image
                    src={Shape}
                    alt='hero image'
                    width={100}
                    height={100}
                    className={styles.shape2}
                />
            </div>
        </div>
    )
}