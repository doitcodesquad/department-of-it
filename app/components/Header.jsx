"use client";
import React, { useState, useRef, useCallback } from "react";
import Type from "./Type.jsx";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Coding from '../../public/Coding.svg';
import UI from '../../public/UI.svg';
import Exam from '../../public/Exam.svg';

export default function Header() {

  const initialCardData = React.useMemo(() => [
    {
      id: 1,
      image: Coding,
      title: "Competitive Coding",
      description: "Join us to sharpen your skills and tackle algorithmic puzzles that push the limits of your coding abilities.",
      icon: "ri:code-box-fill",
      link: "/competitive-coding",
    },
    {
      id: 2,
      image: UI,
      title: "Design",
      description: "From user interfaces to graphic design, explore the world of design principles and visual aesthetics.",
      icon: "icon-park-solid:graphic-design",
      link: "/competitive-coding",
    },
    {
      id: 3,
      image: Exam,
      title: "Gate Club",
      description: "Master multiple-choice exams and advance your knowledge with expert guidance and resources tailored to your academic goals.",
      icon: "healthicons:i-exam-multiple-choice",
      link: "/competitive-coding",
    },
  ], []);
  
  const [cardData, setCardData] = useState(initialCardData);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const loadMoreCards = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newCardData = initialCardData.map((card) => ({
        ...card,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setCardData((prevCards) => [...prevCards, ...newCardData]);
      setLoading(false);
    }, 500);
  }, [initialCardData, loading]);

  React.useEffect(() => {
    if (inView) {
      loadMoreCards();
    }
  }, [inView, loadMoreCards]);

  const cardVariants = {
    offscreen: {
      
      y: 50,
      rotate: 0,
      opacity: 0.38,
    },
    onscreen: {
      x: 0,
      y: 0,
      rotate: -11,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.1
      }
    }
  };

  return (
    <div className="header">
      <div className="intro">
        <div className="intro-text">
          <Type />
        </div>
        <div className="social">
          <Link href="https://github.com/Naveed-SNR">
            <Icon icon="uil:github" className="icon" />
          </Link>
          <Link href="https://github.com/Naveed-SNR">
            <Icon icon="ic:round-discord" className="icon" />
          </Link>
          <Link href="https://github.com/Naveed-SNR">
            <Icon icon="mdi:linkedin" className="icon" />
          </Link>
        </div>
        <div className='register-button-container'>
          <button className="register-button animate">
            <Link href="/login">Register</Link>
          </button>
        </div>
      </div>

      {/* Desktop Card Container */}
      <div className="card-container">
        {cardData.map((card, i) => (
          <Link key={card.id} href={card.link}>
            <motion.div
              key={card.id}
              className="card"
              initial="offscreen"
              whileInView="onscreen"
              transition={{delay: i * 0.1 }}
              variants={cardVariants}
              viewport={{ once: false, amount: 0.54 }}
            >
              <div className="card-image">
                <Image src={card.image} alt={card.title} width={400} height={100} />
              </div>
              <div className="card-heading">
                <Icon icon={card.icon} className="card-icon" />
                <div className="card-title">{card.title}</div>
              </div>
              <div className="card-description">
                {card.description}
              </div>
            </motion.div>
          </Link>
        ))}
        <div ref={ref} className="loading-trigger" />
      </div>

      {/* Mobile Card Container */}
      <div className="card-container-mobile">
        {cardData.map((card, i) => (
          <Link key={card.id} href={card.link}>
            <div className="card-mobile">
              <div className="card-image">
                <Image src={card.image} alt={card.title}  objectFit= "contain"  />
              </div>
              <div className="card-heading">
                <Icon icon={card.icon} className="card-icon" />
                <div className="card-title">{card.title}</div>
              </div>
              <div className="card-description">
                {card.description}
              </div>
            </div>
          </Link>
        ))}
        <div ref={ref} className="loading-trigger" />
      </div>
    </div>
  );
}
