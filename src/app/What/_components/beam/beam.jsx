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
                        There are two types of concrete floor system commonly used in modern construction; ground bearing and suspended. Historically in Kerala we have used ground bearing, poured concrete slab. Beam & Block is a type of suspended concrete floor which is very common in more developed markets.
                        <br /><br />
                        The suspended floor does not rely on support from the ground below but instead is supported by the external walls, and therefore the foundations below.
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
                        The beam and block floor system is fast becoming a popular form of domestic
                        & commercial floor construction. It is an economical option due to off site
                        manufacture of the beams and blocks, fast assembly and little requirement for
                        specialist labour or equipment. The installation of a beam and block floor is
                        not usually weather dependent and therefore specifying this form of construction
                        can reduce site delays that other methods might encounter. Beam and
                        block flooring demonstrates good noise reduction and fire resisting properties,
                        and is also suitable to host underfloor heating systems.                    </p>
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
                        The precast concrete inverted T-beams are supported by the perimeter walls and internal load bearing walls. The beams vary in depth, and are 150mm or 225mm in depth, cast up to lengths up to 6m, they are designed and cast to fit your design. Beam depth and profiles are selected according to span and loading requirements, along with the type of block specified.
                        <br /><br />
                        Infill blocks are then positioned between the T-beams, these blocks are usually lightweight concrete. A sand cement grout is brushed over the surface, filling any gaps providing a good load distribution and avoiding movement in the blocks. The grout also keeps insects and vermin out and assists with air tightness.
                    </p>
                </div>
            </div>

            <Tech />
            <Quality />
        </div>
    )
}