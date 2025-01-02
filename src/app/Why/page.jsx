import Numbers from '@/components/Numbers/numbers'
import Core from './_components/coreSection/core'
import Hero from './_components/heroSection/hero'
import Benefit from './_components/benefitSection/benefit'
import Adv from './_components/advSection/adv'

export default function page() {
    return (
        <>
            <Hero />
            <Core />
            <Numbers />
            <Benefit />
            <Adv />
        </>
    )
}