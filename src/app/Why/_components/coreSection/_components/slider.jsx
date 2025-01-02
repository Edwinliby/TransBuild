'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { data } from './data';
import styles from '../core.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(null);

    const Overlay = ({ item, onClose }) => {
        if (typeof window === 'undefined') return null;

        return createPortal(
            <div className={styles.overlay}>
                <div className={styles.popup}>
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                    >
                        X
                    </button>
                    <p>{item.desc}</p>
                </div>
            </div>,
            document.body // Render the overlay at the root level
        );
    };

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            spaceBetween={20}
            pagination={false}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div style={{ position: 'relative' }}>
                        <div className={`${styles.card} ${styles.text}`}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={400}
                                height={400}
                            />
                            <span>
                                <h2>{item.title}</h2>
                                <button
                                    onClick={() =>
                                        setActiveIndex(activeIndex === index ? null : index)
                                    }
                                >
                                    {activeIndex === index ? 'Close' : 'Read More'}
                                </button>
                            </span>
                        </div>
                        {activeIndex === index && (
                            <Overlay
                                item={item}
                                onClose={() => setActiveIndex(null)}
                            />
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}