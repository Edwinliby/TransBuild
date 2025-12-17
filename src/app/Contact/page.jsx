'use client'

import React, { useState } from 'react';
import styles from './contact.module.css'
import Link from 'next/link'
import Image from 'next/image';
import circle from '@/../public/circle.webp';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Head, Faq } from './_components/head';

export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all the required fields.");
            setIsSubmitting(false);
            return;
        }

        const googleFormURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSeebWw2bYheSkau97B8en6h_wmQcWpTUDBNMLfyv8zPGyCJGA/formResponse";

        const formBody = new FormData();
        formBody.append("entry.846571496", formData.name);
        formBody.append("entry.737293047", formData.email);
        formBody.append("entry.1344258960", formData.phone);
        formBody.append("entry.1553913831", formData.message);

        try {
            await fetch(googleFormURL, {
                method: "POST",
                body: formBody,
                mode: "no-cors",
            });

            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        setIsSubmitting(false);
    };

    return (
        <>
            <Head />
            <div className={styles.formBox}>
                <div className={styles.form}>
                    <div className={styles.contact}>
                        <div className={styles.head}>
                            <h1>Contact Information</h1>
                            <p>
                                For a free consultation including, free value
                                engineering and quotation for your project.
                            </p>
                        </div>
                        <div className={styles.links}>
                            <Link href='tel:918848879006' aria-label='phone'><IoIosCall size={25} /> +91 88488 79006</Link>
                            <Link href='mailto: connect@transbuild.in' aria-label='mail'> <IoMail size={25} /> connect@transbuild.in</Link>
                            <Link href="" target="_blank"><IoLocation size={25} />
                                <div className={styles.address}>
                                    <b>Office Address:</b>
                                    <p>
                                        Transbuild Dwelling Pvt. Ltd., <br />
                                        1st floor, Floatels Chambers, <br />
                                        DPI Road, Jagathy, Trivandrum, 695014.
                                    </p>
                                </div>
                            </Link>
                            <Link href="" target="_blank"><IoLocation size={25} />
                                <div className={styles.address}>
                                    <b>Factory Address:</b>
                                    <p>
                                        Kazhakootam Karode Bypass, <br />
                                        Puruthivila - Mannakkallu Service Road, <br />
                                        Trivandrum P.O, 695014.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <Image
                            src={circle}
                            alt="vector"
                            width={1000}
                            height={1000}
                            className={styles.circle}
                        />
                    </div>
                    <div className={styles.formContent}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name*</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email*</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone no*</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>

                            <div className={styles.msgContainer}>
                                <div className={styles.msgGroup}>
                                    <label htmlFor="message">Message*</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    );
}
