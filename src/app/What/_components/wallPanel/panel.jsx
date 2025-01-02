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
                        Made out of concrete, comprising of cement, sand and aggregate available
                        in 75mm, 100mm and 140mm width and in heights of 2700mm,
                        3000mm and 3300mm, the ICC ACOTEC precast concrete wall panel system
                        is a technology from ELEMATIC Finland. Built for the purpose of
                        partitioning commercial, institute and office buildings by replacing
                        conventional materials, the system was first introduced in the late 1980's,
                        and has proven itself in more than 15 countries around the world.
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
