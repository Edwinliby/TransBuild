'use client';

import { useEffect, useRef } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import shape from '@/../public/shape.webp';
import worker from '@/../public/worker.webp';
import Dummy from '@/../public/dummy.png';
import gsap from 'gsap';

const list = [
    "Precision Engineering",
    "Customer-Focused Approach",
    "Exceptional Support",
    "Own Production Facilities"
]

export default function Hero() {
    const imgRef = useRef([]);

    useEffect(() => {
        gsap.from(imgRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.imgContainer}>
                <Image ref={(el) => (imgRef.current[0] = el)} src={Dummy} alt="Image 1" width={400} height={400} />
                <Image ref={(el) => (imgRef.current[1] = el)} src={Dummy} alt="Image 2" width={400} height={400} />
                <Image ref={(el) => (imgRef.current[2] = el)} src={Dummy} alt="Image 3" width={400} height={400} />
            </div>

            <div className={styles.trans}>
                <div className={styles.left}>
                    <h1>Who is <span>TransBuild?</span></h1>
                    <p>Kerala's Top Precast Beam & Block Slab Manufacturer</p>
                    <div>
                        {
                            list.map((item, i) => (
                                <b key={i}>{item}</b>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.shape} src={shape} alt="Shape" width={1200} height={1200} />
                    <Image className={styles.worker} src={worker} alt="Worker" width={1200} height={1200} />
                </div>
            </div>

            <div className={styles.mission}>
                <div>
                    <Image
                        src={Dummy}
                        alt="Image 1"
                        width={800}
                        height={800}
                    />
                </div>
                <div>
                    <h1>Our Mission</h1>
                    <p>At TransBuild, we aim to revolutionize construction with advanced technologies that prioritize efficiency, sustainability, and affordability. By using modular designs and eco-friendly materials, we accelerate project timelines, lower costs, and minimize environmental impact. Our goal is to empower builders to optimize resources, reduce waste, and cut carbon emissions at every stage of the construction process. We are committed to shaping a future where sustainable, high-quality buildings are created with both performance and the planet in mind.</p>
                </div>
            </div>
        </div>
    );
}
