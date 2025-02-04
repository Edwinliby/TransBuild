import styles from './beam.module.css'
import Image from 'next/image'
import be1 from '@/../public/be1.webp'
import be2 from '@/../public/be2.webp'
import be3 from '@/../public/be3.webp'
import Tech from './components/techSection/tech'
import Quality from './components/qualitySection/quality'

export default function Beam() {
    return (
        <div className={styles.beam}>
            <h1 className={styles.title}>Beam <span>&</span> Block Slab?</h1>

            <div className={styles.container}>
                <div>
                    <Image
                        src={be1}
                        alt="beam"
                        width={900}
                        height={900}
                    />
                </div>
                <div>
                    <p>
                        Modern construction primarily uses two types of concrete floor systems: <b>ground-bearing</b> and <b>suspended</b>. In Kerala, ground-bearing poured concrete slabs have been the traditional choice. However, Beam & Block, a type of suspended floor system widely used in advanced markets, is gaining traction.
                        <br /><br />
                        Suspended floors do not depend on the ground for support. Instead, they rely on the external walls and the underlying foundations, making them a robust and adaptable choice for various construction environments.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <Image
                        src={be2}
                        alt="beam"
                        width={900}
                        height={900}
                    />
                </div>
                <div>
                    <p>
                        The beam and block floor system is gaining popularity for both domestic and commercial projects due to its cost-efficiency, quick assembly, and minimal need for specialized labor or equipment. Off-site manufacturing speeds up installation and reduces weather-related delays. This flooring option offers excellent noise reduction, fire resistance, and compatibility with underfloor heating, making it a reliable and versatile solution for modern construction.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <Image
                        src={be3}
                        alt="beam"
                        width={900}
                        height={900}
                    />
                </div>
                <div>
                    <p>
                        Precast concrete inverted T-beams are supported by perimeter and internal load-bearing walls. These beams, available in 150mm or 225mm depths and up to 6m in length, are designed based on span and load requirements. Lightweight concrete infill blocks are placed between the beams, followed by a sand-cement grout. This grout fills gaps, ensuring even load distribution, preventing movement, and enhancing air tightness by keeping out insects and vermin. This design provides durability, stability, and efficiency for various construction needs.
                    </p>
                </div>
            </div>

            <Tech />
            <Quality />
        </div>
    )
}