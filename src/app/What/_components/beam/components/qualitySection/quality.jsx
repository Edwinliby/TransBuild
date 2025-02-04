'use client';

import { useState } from 'react';
import styles from './quality.module.css';
import { data } from './data';

export default function Quality() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.quality}>
            <h1>Our Commitment to Quality</h1>
            <p className={styles.text}>
                TransBuild maintains the highest standards for Beam and Block products through strict quality control. Sustainable raw materials are carefully selected and monitored throughout production, from casting beams to creating blocks.
                <br /><br />
                Advanced testing ensures structural integrity, durability, and load-bearing capacity, including checks for compressive strength and dimensional accuracy. Quality control extends to curing and finishing, guaranteeing that every product meets or exceeds industry safety and performance standards.
            </p>
            <h2>Our Quality Control Process</h2>

            <div className={styles.qualityList}>
                {data.map((item, index) => (
                    <div key={index} className={styles.details}>
                        <summary
                            className={styles.summary}
                            onClick={() => handleToggle(index)}
                        >
                            {item.title}
                        </summary>
                        {openIndex === index && <p className={styles.desc}>{item.desc}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
