"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import white from "@/../public/logo-color.svg";

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

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false); 
    };

    return (
        <nav className={styles.nav}>
            <div
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""
                    } ${isMobileMenuOpen ? styles.open : ""}`}
            >
                {/* Mobile Menu Icon */}
                <div
                    className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ""}`}
                    onClick={handleMobileMenuToggle}
                >
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                {/* Logo */}
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

                {/* Navigation Links */}
                <div
                    className={`${styles.links} ${isMobileMenuOpen ? styles.open : ""
                        } ${isScrolled ? styles.scrolled : ""}`}
                >
                    <Link href="/" aria-label="logo" onClick={handleLinkClick}>
                        <Image
                            className={styles.logo_Mobile}
                            src={white}
                            alt="logo"
                            width={1500}
                            height={1500}
                        />
                    </Link>

                    <div className={styles.linkBlocks}>
                        <Link href="/Who" className={styles.link} onClick={handleLinkClick}>Who</Link>
                        <Link href="/What" className={styles.link} onClick={handleLinkClick}>What</Link>
                        <Link href="/Why" className={styles.link} onClick={handleLinkClick}>Why</Link>
                    </div>

                    <Link href="/Contact" className={styles.contact} onClick={handleLinkClick}>Get a Quote</Link>
                </div>
            </div>
        </nav>
    );
}