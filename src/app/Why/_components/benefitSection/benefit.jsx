import styles from './benefit.module.css'
import Image from 'next/image'
import b1 from '@/../public/b1.webp'
import b2 from '@/../public/b2.webp'
import b3 from '@/../public/b3.webp'
import b4 from '@/../public/b4.webp'
import b5 from '@/../public/b5.webp'
import b6 from '@/../public/b6.webp'

const data = [
    {
        img: b1,
        title: "Minimal Excavation and No Backfill",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
    {
        img: b2,
        title: "No Formwork",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
    {
        img: b3,
        title: "No Propping",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
    {
        img: b4,
        title: "No BRC and Steel Reinforcement",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
    {
        img: b5,
        title: "Easy Installation",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
    {
        img: b6,
        title: "High Performance",
        desc: "For our Beam and Block system, the excavation required is only for foundation trenching or stub columns and ground beams. The suspended Beam and Block floor is laid simply supported on top of the foundation walling. There is no requirement for Excavation and removal of foundation soils and subsequent back-filling with select materials, as you would with a conventional slab."
    },
]

export default function Benefit() {
    return (
        <div className={styles.benefit}>
            <h1>Benefits of <span>Beam & Block</span></h1>
            <div className={styles.grid}>
                {
                    data.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.imgContainer}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={800}
                                    height={800}
                                />
                            </div>
                            <div className={styles.content}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
