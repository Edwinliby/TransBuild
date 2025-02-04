'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './numbers.module.css';

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

export default function Numbers({ head }) {
    return (
        <div className={styles.numbers}>
            {head && <h1>{head}</h1>}
            <div className={styles.row}>
                {data.map((item, index) => {
                    const count = useCountUp(item.number, 2000); // Animate for 2 seconds

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
            <b>***Based on all consolidated factors of a traditional method</b>
        </div>
    );
}