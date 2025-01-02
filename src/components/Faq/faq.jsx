'use client'

import { useState, useMemo } from "react";
import { data } from './data';
import styles from './faq.module.css';
import { IoChevronDownSharp } from "react-icons/io5";

export default function Faq() {
    const [searchTerm, setSearchTerm] = useState("");
    const [faqs, setFaqs] = useState([...data]);
    const [visibleFaqs, setVisibleFaqs] = useState(7);
    const [openFaq, setOpenFaq] = useState(faqs[0]?.id || null);

    const filteredFaqs = useMemo(() => {
        return faqs.filter((faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [faqs, searchTerm]);

    const handleLoadMore = () => {
        setVisibleFaqs(visibleFaqs + 3);
    };

    const handleToggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className={styles.faq}>
            <div className={styles.faqContent}>
                <div className={styles.faqList}>
                    {filteredFaqs.slice(0, visibleFaqs).map((faq) => (
                        <div key={faq.id} className={styles.faqCard}>
                            <div onClick={() => handleToggleFaq(faq.id)} className={styles.summary}>
                                {faq.question}
                                <IoChevronDownSharp className={`${styles.icon} ${openFaq === faq.id ? styles.rotate : ''}`} />
                            </div>
                            {openFaq === faq.id && <p>{faq.answer}</p>}
                        </div>
                    ))}
                    {filteredFaqs.length > visibleFaqs && (
                        <button className={styles.loadBtn} onClick={handleLoadMore}><b>Load More</b></button>
                    )}
                </div>
            </div>
        </div>
    );
}