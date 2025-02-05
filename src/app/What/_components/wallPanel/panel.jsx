import styles from './panel.module.css'
import Image from 'next/image'
import pa1 from '@/../public/pa1.webp'
import pa2 from '@/../public/pa2.webp'
import pa3 from '@/../public/pa3.webp'

const points = [
    "5x faster than cement cellular-block-wall",
    "3x fast as CLC or AAC block-wall",
    "5x faster than traditional brick-wall",
]

export default function Panel() {
    return (
        <div className={styles.panel}>
            <h1>Precast Wall Panels?</h1>

            <div className={styles.points}>
                {
                    points.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))
                }
            </div>

            <div className={styles.container}>
                <div>
                    <Image
                        src={pa1}
                        alt="Precast Wall Panel"
                        width={900}
                        height={900}
                    />
                </div>
                <div>
                    <p>
                        Made from concrete (cement, sand, and aggregate), the panels come in widths of 75mm, 100mm, and 140mm, with heights of 2700mm, 3000mm, and 3300mm. Developed with Finnish technology from ELEMATIC, this system was introduced in the late 1980s and is now used in over 15 countries. It serves as a superior alternative to traditional materials for partitioning in commercial, institutional, and office buildings, offering proven durability and performance globally.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <Image
                        src={pa2}
                        alt="Precast Wall Panel"
                        width={900}
                        height={900}
                    />
                </div>
                <div>
                    <Image
                        src={pa3}
                        alt="Precast Wall Panel"
                        width={900}
                        height={900}
                    />
                </div>
            </div>
        </div>
    )
}
