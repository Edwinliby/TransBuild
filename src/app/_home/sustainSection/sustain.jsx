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
                    <h1>TransBuild saves hundreds of trees on every build</h1>
                    <p>TransBuild requires no form-work or propping saving large amount of timber every time it is used on site. As it is also factory made it reduces on emissions from transportation and reduces on waste.</p>
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
                    <p>At TransBuild we are committed to keeping people healthy & safe. We do this by following all the best health and safety practices both in our yard and on site. We are also committed to sustainable manufacturing, doing our bit to reduce climate change.</p>
                    <ul>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Sustainablility</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Project on Time</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Modern Technology</li>
                        <li><Image src={icon} alt="icon" width={20} height={20} /> Bespoke Designs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
