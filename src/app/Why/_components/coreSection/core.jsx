'use client';

import { useState } from 'react'
import styles from './core.module.css';
import Image from 'next/image';
import u1 from '@/../public/u1.webp'
import u2 from '@/../public/u2.webp'
import u3 from '@/../public/u3.webp'
import Slider from './_components/slider';

const data = [
    {
        img: u1,
        title: "Storied Slabs",
        desc: "The EcoConcrete Beam and Block Flooring System saves time and cost on site. The floor is quick to install without the need for specialist skills. Site preparation is reduced and no hardcore or oversite concreting is required. Also, internal foundations allowing building works to continue without delay. The EcoConcrete Beam and Block Flooring System is ideal for a wide load applications and 225mm deep for heavy duty and longer span requirements, for example in commercial construction."
    },
    {
        img: u2,
        title: "Roof Slab",
        desc: "Flat roofs are becoming more and more desirable as they can typically be used in most housing projects, including commercial and residential buildings. The quick turnaround coupled with cost-effectiveness means, you can benefit more from your rooftops once it is completed. Beam and block flat roof slab systems are economical compared to other types of roofs. When installed properly, beam and block flat roof slab system helps prevent leakages that occur along the valleys/ridges of a pitched timber/steel roof. For starters, the roof is not completely flat as the name suggests but laid to a slight slope of 1:4 or less, to ensure the rainwater drains well to the lower side. Then waterproofing is done to drain the rainwater well and avoid leakage."
    },
    {
        img: u3,
        title: "Ground Floor Slab",
        desc: "For the ground floor slab, there is no need for mass excavation, simply remove the topsoil and trench for the foundation walls. The precast concrete inverted T-beams are supported by the perimeter walls and internal load-bearing walls. The beams are 250mm in depth and made up to lengths of around 6m. They are usually designed and manufactured to span specific distances. Beam arrangement and lengths are selected according to span and loading requirements, along with the type of block specified."
    }
]

export default function Core() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className={styles.core}>
            <div className={styles.head}>
                <p>Where can Beam & Block be used?</p>
                <h1>Core uses of <span>Beam</span> & <span>Block Slab</span></h1>
            </div>
            <div className={styles.uses}>
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <div className={styles.card}>
                                <Image src={item.img} alt="Image" width={400} height={400} />
                                <span>
                                    <h2>{item.title}</h2>
                                    <button onClick={() => setActiveIndex(index)}>{activeIndex === index ? 'Close' : 'Read More'}</button>
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.overlay}>
                                    <div className={styles.popup}>
                                        <button className={styles.closeButton} onClick={() => setActiveIndex(null)}>X</button>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            <h2>Alternative uses</h2>
            <Slider />
        </div>
    )
}
