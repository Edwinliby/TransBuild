'use client'

import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
const logo = "/logo-white.svg";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaYoutube, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15667.232757242782!2d76.246182!3d10.977846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cda1960f1e95%3A0x971882d6dc32948e!2sShifa%20Convention%20Center!5e0!3m2!1sen!2sin!4v1731414712454!5m2!1sen!2sin'

export default function Footer() {
    return (
        <div className={styles.content}>
            <div className={styles.blocks}>

                <div className={styles.contact}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={400}
                        height={400}
                        className={styles.logo}
                    />
                    <div className={styles.address}>
                        <b>Office Address:</b>
                        <p>
                            Transbuild Dwelling Pvt. Ltd., <br />
                            1st floor, Floatels Chambers, <br />
                            DPI Road, Jagathy, Trivandrum, 695014.
                        </p>
                    </div>
                </div>

                <div className={styles.contact}>
                    <b>Quick Links</b>
                    <div className={`${styles.links} ${styles.quick}`}>
                        <Link href="/What" aria-label='what'>What</Link>
                        <Link href="/Why" aria-label='why'>Why</Link>
                        <Link href="/Who" aria-label='who'>Who</Link>
                    </div>
                </div>

                <div className={styles.contact}>
                    <div className={styles.address}>
                        <b>Factory Address:</b>
                        <p>
                            Kazhakootam Karode Bypass,<br />
                            Puruthivila - Mannakkallu Service Road, <br />
                            Trivandrum P.O, 695014.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <b>Contact:</b>
                        <Link href='tel:918848879006' aria-label='phone'><FaPhoneAlt />+91 88488 79006</Link>
                        <Link href='mailto:connect@transbuild.in' aria-label='mail'> <IoMail /> connect@transbuild.in</Link>
                    </div>
                    {/* <div>
                        <b>Follow Us</b>
                        <div className={styles.icon}>
                            <Link href='#' target='_blank' aria-label='mail' className={styles.con}><IoMail /></Link>
                            <Link href='#' target='_blank' aria-label='instagram' className={styles.con}><AiFillInstagram /></Link>
                            <Link href='#' target='_blank' aria-label='Youtube' className={styles.con}><FaYoutube /></Link>
                            <Link href='#' target='_blank' aria-label='facebook' className={styles.con}><FaFacebook /></Link>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={styles.terms}>
                <Link href="#">Terms and Conditions</Link>
                <p>© {new Date().getFullYear()} TransBuild. All rights reserved</p>
            </div>
        </div>
    )
}
