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
            <h1>Quality Control</h1>
            <p className={styles.text}>
                TransBuild ensures the high quality of its Beam and Block products through a meticulous quality control process. The process begins with the careful selection of raw materials, sourced sustainably to meet stringent environmental standards. Each phase of production is closely monitored, from the casting of concrete beams to the creation of concrete blocks.
                <br /><br />
                The company employs advanced testing methodologies to assess the structural integrity, durability, and load-bearing capacities of its Beam and Block products. This includes rigorous testing for compressive strength, dimensional accuracy, and adherence to industry specifications. TransBuild’s quality control measures extend to the curing and finishing stages, ensuring that the final products meet or exceed industry standards for safety and performance.
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
