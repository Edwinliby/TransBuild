"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import white from "@/../public/logo.png";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""
                    } ${isMobileMenuOpen ? styles.open : ""}`}
            >
                <div
                    className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ""
                        }`}
                    onClick={handleMobileMenuToggle}
                >
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                <Link href="/" aria-label="logo" className={styles.white}>
                    <Image
                        className={styles.logo}
                        src={white}
                        alt="logo"
                        width={1500}
                        height={1500}
                    />
                </Link>

                <Link href="/" aria-label="logo" className={styles.color}>
                    <Image
                        className={styles.color_logo}
                        src={white}
                        alt="logo"
                        width={1500}
                        height={1500}
                    />
                </Link>

                <div
                    className={`${styles.links} ${isMobileMenuOpen ? styles.open : ""
                        } ${isScrolled ? styles.scrolled : ""}`}
                >
                    <Link href="/" aria-label="logo">
                        <Image
                            className={styles.logo_Mobile}
                            src={white}
                            alt="logo"
                            width={1500}
                            height={1500}
                        />
                    </Link>

                    <div className={styles.linkBlocks}>
                        <Link href="/Who" className={styles.link}>Who</Link>
                        <Link href="/What" className={styles.link}>What</Link>
                        <Link href="/Why" className={styles.link}>Why</Link>
                    </div>

                    <Link href="/Contact" className={styles.contact}>Get a Quote</Link>
                </div>
            </div>
        </nav>
    );
}