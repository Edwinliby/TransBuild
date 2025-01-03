'use client';

import { useState } from 'react';
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
    },
    {
        img: k2,
        title: 'Precast Wall Panels',
        component: <Panel />,
    },
];

export default function Head() {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <div className={styles.head}>
            <h1 className={styles.title}>What is TransBuild</h1>
            <div className={styles.box}>
                {options.map((item, index) => (
                    <div key={index} className={styles.card} onClick={() => setSelectedOption(index)}>
                        <Image src={item.img} alt={item.title} width={400} height={400} />
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <button onClick={() => setSelectedOption(index)}>Know more</button>
                        </div>
                    </div>
                ))}
            </div>

            {options[selectedOption].component}
        </div>
    );
}
