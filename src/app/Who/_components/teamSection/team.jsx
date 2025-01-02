import styles from "./team.module.css";
import { data, partnerData } from "./data";
import Image from "next/image";

export default function Team() {
    return (
        <div className={styles.team}>
            <h1 className={styles.teamTitle}>Introduce <span>Our Experts</span></h1>
            <div className={styles.teamContainer}>
                {
                    data.map((item, index) => (
                        <div key={index} className={styles.teamCard}>
                            <Image src={item.img} alt="Image" width={1000} height={1000} />
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.partner}>
                <div>
                    <h1>Partnerships</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className={styles.partnerContainer}>
                    {
                        partnerData.map((item, index) => (
                            <div key={index} className={styles.partnerCard}>
                                <Image src={item.img} alt="Image" width={1000} height={1000} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}