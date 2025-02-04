import styles from './sustain.module.css'
import Image from 'next/image'
import Link from 'next/link'
import su1 from '@/../public/su1.webp'
import su2 from '@/../public/su2.webp'
import icon from '@/../public/icon.svg'

export default function Sustain() {
    return (
        <div className={styles.sustain}>
            <div>
                <Image
                    src={su1}
                    alt="Sustain"
                    width={2000}
                    height={2000}
                    className={styles.sustainImg}
                />
                <div className={styles.content}>
                    <b>Sustainability</b>
                    <h1>TransBuild Saves Hundreds of Trees on Every Project</h1>
                    <p>Our system eliminates the need for formwork or propping, significantly reducing timber usage. Factory manufacturing further minimizes emissions by streamlining transportation and waste management, making every build eco-friendly and efficient.</p>
                    <Link href=''>Get a Quote</Link>
                </div>
            </div>
            <div>
                <Image
                    src={su2}
                    alt="Sustain"
                    width={2000}
                    height={2000}
                    className={styles.sustainImg}
                />
                <div className={styles.content}>
                    <b>We Follow Best Practices</b>
                    <p>At TransBuild, we prioritize health, safety, and sustainability by adhering to the highest standards on-site and in production. Our practices protect workers, reduce waste, and contribute to combating climate change through eco-friendly manufacturing.</p>
                    <ul>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Sustainability</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> On-Time Projects</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Modern Technology</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Custom Designs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
