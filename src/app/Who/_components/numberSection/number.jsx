'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './number.module.css';
import Image from 'next/image';
import dummy from '@/../public/dummy.png';

const data = [
    {
        number: "20",
        title: "Less costs per floor",
        suffix: "%",
    },
    {
        number: 6,
        title: "Up to six times faster",
        suffix: "X",
    },
    {
        number: 500,
        title: "Trees saved per build",
    },
    {
        number: 33,
        title: "Days Saved per floor",
    },
];

function useCountUp(target, duration) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [target, duration]);

    return count;
}

export default function Number() {
    return (
        <div className={styles.numContainer}>
            <div className={styles.numTitle}>
                <h1>Highlight company impact by the numbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className={styles.row}>
                {data.map((item, index) => {
                    const count = useCountUp(item.number, 2000);

                    return (
                        <motion.div
                            key={index}
                            className={styles.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        >
                            <h2>{item.suffix ? `${count}${item.suffix}` : count}</h2>
                            <p>{item.title}</p>
                        </motion.div>
                    );
                })}
            </div>

            <Image
                src={dummy}
                alt="Number"
                width={800}
                height={800}
            />
        </div>
    )
}