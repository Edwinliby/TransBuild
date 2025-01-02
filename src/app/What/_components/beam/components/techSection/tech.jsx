import styles from './tech.module.css'
import Link from 'next/link'
import Image from 'next/image'
import be4 from '@/../public/be4.webp'
import be5 from '@/../public/be5.webp'
import be6 from '@/../public/be6.webp'

export default function Tech() {
    return (
        <div className={styles.tech}>
            <div className={styles.techHead}>
                <h1>Technical Specs</h1>
                <Link href="#">Technical Brochure</Link>
            </div>

            <div className={styles.block}>
                <h2>Load & Span Tables</h2>
                <b>150mm Load Table</b>
                <p>
                    Density of Hollow Infill blocks = 1160Kg/m³, Topping (50mm)= 1.25KN/m2, <br />
                    Celling plaster for suspended floor 12mm thick + tiles 18mm = 0.72KN/m2
                </p>
                <br />
                <p>
                    Residential houses = 1.5KN/m2, Hotels = 2.0KN/m2, Classrooms = 3.0KN/m2, <br />
                    Shops = 4.0KN/m2, Workshops = 5.0KN/m2; Industrial walkways = 7.5KN/m2
                </p>
                <Image
                    src={be4}
                    alt="beam"
                    width={2000}
                    height={2000}
                />
            </div>

            <div className={styles.block}>
                <h2>225mm Load Table</h2>
                <p>
                    Density of Hollow Infill blocks = 1160Kg/m³, Topping (50mm)= 1.25KN/m2, <br />
                    Celling plaster for suspended floor 12mm thick + tiles 18mm = 0.72KN/m2
                </p>
                <br />
                <p>
                    Residential houses = 1.5KN/m2, Hotels = 2.0KN/m2, Classrooms = 3.0KN/m2,  <br />
                    Shops = 4.0KN/m2, Workshops = 5.0KN/m2; Industrial walkways = 7.5KN/m2
                </p>
                <Image
                    src={be5}
                    alt="beam"
                    width={2000}
                    height={2000}
                />
                <Image
                    src={be6}
                    alt="beam"
                    width={2000}
                    height={2000}
                />
            </div>
        </div>
    )
}
