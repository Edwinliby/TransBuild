'use client'

import React, { useState } from 'react';
import styles from './contact.module.css'
import Link from 'next/link'
import Image from 'next/image';
import circle from '@/../public/circle.webp';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Head, Faq } from './_components/head';

export default function Form() {

    const [formData, setFormData] = useState({ firstName: '', email: '', number: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                alert('Form submitted successfully!');
                setFormData({ firstName: '', email: '', number: '', message: '' });
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            alert('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false);
        }
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
                            <Link href="mailto:info@transbuild.com"><IoMail size={25} /> info@transbuild.com</Link>
                            <Link href="tel:91987654321"><IoIosCall size={25} /> +91 9876 54321</Link>
                            <Link href="https://goo.gl/maps/9vz5dK3Ys1U2" target="_blank"><IoLocation size={25} />Lorem ipsum address location</Link>
                        </div>
                        <div className={styles.social}>
                            <Link href="" aria-label='Instagram'> <AiFillInstagram size={25} /></Link>
                            <Link href="" aria-label='Facebook'> <AiFillFacebook size={25} /></Link>
                            <Link href="" aria-label='Youtube'> <AiFillYoutube size={25} /></Link>
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
                                <label htmlFor="firstName">Name*</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email*</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="number">Phone no*</label>
                                <input type="text" name="number" value={formData.number} onChange={handleChange} required />
                            </div>

                            <div className={styles.msgContainer}>
                                <div className={styles.msgGroup}>
                                    <label htmlFor="message">Message*</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
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