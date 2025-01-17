'use client';

import { useState, useRef } from 'react';
import styles from './common.module.css';
import Image from 'next/image';
import k1 from '@/../public/k1.webp';
import k2 from '@/../public/k2.webp';
import Beam from './beam/beam';
import Panel from './wallPanel/panel';

const options = [
    {
        img: k1,
        title: 'Beam & Block Slab',
        component: <Beam />,
        id: 'beam',
    },
    {
        img: k2,
        title: 'Precast Wall Panels',
        component: <Panel />,
        id: 'panel',
    },
];

export default function Head() {
    const [selectedOption, setSelectedOption] = useState(0);
    const sectionRefs = useRef([]);

    const handleScroll = (index) => {
        const section = sectionRefs.current[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setSelectedOption(index); 
    };

    return (
        <div className={styles.head}>
            <h1 className={styles.title}>What is TransBuild</h1>
            <div className={styles.box}>
                {options.map((item, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onClick={() => handleScroll(index)}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={400}
                        />
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <button onClick={() => handleScroll(index)}>
                                Know more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {options.map((item, index) => (
                <div
                    id={item.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    key={index}
                    className={styles.section}
                    style={{
                        display: selectedOption === index ? 'block' : 'none',
                    }}
                >
                    {item.component}
                </div>
            ))}
        </div>
    );
}