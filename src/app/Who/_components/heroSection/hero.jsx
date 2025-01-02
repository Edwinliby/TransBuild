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
                    <p>We want to be your supplier of choice when it comes to selecting a floor slab.  We want you, our customer to have a positive experience dealing with us and we aim to give you the best advice and solution for your needs. We believe that our product has the versatility, the security and the functionality that our customers demand.  Our product is backed up by a team of qualified Engineers and undergoes regular quality testing to ensure that what  we deliver to our client is fit for purpose.  Our in house design team ensures that our product fits in with your design , we take into consideration the intended usage of the floors to ensure that the loading requirements of the slab are built to design specifications.</p>
                </div>
            </div>
        </div>
    );
}
