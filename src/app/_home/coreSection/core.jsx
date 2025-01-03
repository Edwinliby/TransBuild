import styles from './core.module.css'
import Image from 'next/image'
import ico1 from '@/../public/c1.webp'
import ico2 from '@/../public/c2.webp'
import ico3 from '@/../public/c3.webp'
import ico4 from '@/../public/c4.webp'
import ico5 from '@/../public/c5.webp'
import ico6 from '@/../public/c6.webp'

import w1 from '@/../public/w1.webp'
import w2 from '@/../public/w2.webp'
import w3 from '@/../public/w3.webp'
import w4 from '@/../public/w4.webp'

import line from '@/../public/Divider.svg'

const data = [
    {
        icon: ico1,
        title: 'Fast and Reliable Delivery',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
    {
        icon: ico2,
        title: 'Ideal for DIY Projects',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
    {
        icon: ico3,
        title: 'Secure and Theft-Free',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
    {
        icon: ico4,
        title: 'Save Time for Festive Celebrations',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
    {
        icon: ico5,
        title: 'Environmentally Conscious Construction',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
    {
        icon: ico6,
        title: 'Ready-to-Install Convenience',
        desc: 'Our efficient delivery system ensures your materials arrive on time, allowing you to make the most of your holiday project.'
    },
]

const process = [
    {
        title: "Consultation",
        desc: "Firstly we will review your project and give you Free Value Engineering, making any recommendations you may need."
    },
    {
        title: "Quotation",
        desc: "Secondly once the Architect has done with your design, we will require either the drawings to enable us to give you a quote for the floor. "
    },
    {
        title: "Measurements",
        desc: "When that’s agreeable then the process can begin. We will  first confirm the measurements on site."
    },
    {
        title: "Delivery",
        desc: "As soon as you are ready on site for installation, we will deliver the Beam & Blocks for your floor or roof slabs. "
    },
    {
        title: "Installation",
        desc: "One of our team of expert installers will come to your site to oversee the installation for free."
    },
]

export default function Core() {
    return (
        <div className={styles.core}>
            <div>
                <h1 className={styles.coreHead}>Core Benefits of <br /><span>Building with TransBuild</span></h1>
                <div className={styles.coreContainer}>
                    {
                        data.map((item, index) => (
                            <div key={index} className={styles.coreCard}>
                                <Image src={item.icon} alt="icon" width={200} height={200} />
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className={styles.use}>
                    <div className={styles.useCard}>
                        <Image
                            src={w1}
                            alt="w1"
                            width={400}
                            height={400}
                        />
                        <b>Home Builder</b>
                    </div>
                    <div className={styles.useCard}>
                        <Image
                            src={w2}
                            alt="w1"
                            width={400}
                            height={400}
                        />
                        <b>Mulitstorey <br /> Residential / Commercial</b>
                    </div>
                </div>
                <div className={styles.useCenter}>
                    <div>
                        <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                        <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                    </div>
                    <h1 className={styles.coreHead}>When should I use <br /> <span>TransBuild?</span></h1>
                    <div>
                        <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                        <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                    </div>
                </div>
                <div className={styles.use}>
                    <div className={styles.useCard}>
                        <Image
                            src={w3}
                            alt="w1"
                            width={400}
                            height={400}
                        />
                        <b>School / Retail</b>
                    </div>
                    <div className={styles.useCard}>
                        <Image
                            src={w4}
                            alt="w1"
                            width={400}
                            height={400}
                        />
                        <b>High End Housing</b>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.coreHead}>Our Working Process</h1>
                <div className={styles.process}>
                    {
                        process.map((item, index) => (
                            <div key={index}>
                                <div className={styles.processCard}>
                                    <b>{item.title}</b>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.processLines}>
                    <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                    <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                    <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                    <Image className={styles.line} src={line} alt="line" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}
