'use client'

import React, { useState } from 'react';
import styles from '../faq.module.css'
import Link from 'next/link'
import Image from 'next/image';
import circle from '@/../public/circle.webp';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

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
        <div className={styles.form}>
            <div className={styles.formHead}>
                <h1>Request a Quote</h1>
                <p>Ready to Work Together? Build a project with us!</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formContent}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">Name*</label>
                    <input type="text" name="firstName" value={formData.firstName} placeholder='Enter your name' onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" value={formData.email} placeholder='Enter your email' onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="number">Phone no*</label>
                    <input type="text" name="number" value={formData.number} placeholder='Enter your number' onChange={handleChange} required />
                </div>

                <div className={styles.msgContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message*</label>
                        <textarea name="message" value={formData.message} placeholder='Brief your query' onChange={handleChange} required />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}