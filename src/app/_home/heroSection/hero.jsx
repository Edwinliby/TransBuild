'use client'

import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/../public/herobg.webp';
import Shape from '@/../public/shape.svg';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    Efficient, sustainable, and scalable construction solutions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Are you a builder, contractor, architect, or homebuilder looking for sustainable, cost-effective solutions?
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <Link className={styles.book} href='#'>Book Appointment</Link>
                    <Link className={styles.learn} href='/What'>Learn more</Link>
                </motion.div>
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