'use client';

import { useEffect, useRef } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import shape from '@/../public/shape.webp';
import worker from '@/../public/worker.webp';
import Dummy from '@/../public/dummy.png';
import gsap from 'gsap';

const list = [
    "Engineered Solution",
    "Driven by Customer Satisfaction",
    "Excellent Customer Support",
    "In-house Production"
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
                    <p>We are Kerala's leading manufacturer of precast Beam & Block Slab</p>
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
                    <p>At Transbuild, we are revolutionizing the construction industry with cutting-edge building technologies prioritising efficiency, sustainability, and affordability. By integrating advanced design methods, modular construction solutions, and eco-friendly materials, we enable faster project delivery, significantly reduce costs, and minimize environmental footprints. Our innovations empower builders and developers to optimise resources, reduce waste, and lower carbon emissions across every stage of construction. We are committed to driving a transformative shift toward a more sustainable future, where high-quality, cost-effective buildings are created with the planet in mind.</p>
                </div>
            </div>
        </div>
    );
}
