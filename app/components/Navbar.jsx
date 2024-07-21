"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // match this with your transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const variants = {
    open: {
      x: 0,
      transition: {  
        damping: 0,
      },
    },
    closed: {
      x: "100%",
      transition: {  
        damping: 0,
      },
    },
  }

  return (
    <>
      <nav className="nav-container">
        <div className="navbar">
          <Link href="/">
            <div className="title">{`CODESQUAD`}</div>
          </Link>
          <div className="nav-toggle">
            <button
              className="p-2 text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`nav-list`}>
            <Link className="nav-item" href="/events">
              Events
            </Link>
            <Link className="nav-item" href="/members">
              Members
            </Link>
            <Link className="nav-item" href="/clubs">
              Clubs
            </Link>
            <Link className="nav-item" href="/contact">
              Contact
            </Link>
          </div>
          {isVisible && (
            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              className={`mobile-nav-list ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 0.38s',
              }}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-black focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center mt-10 space-y-4">
                <Link className="nav-item-mobile" href="/">Events</Link>
                <Link className="nav-item-mobile" href="/">Blog</Link>
                <Link className="nav-item-mobile" href="/">Clubs</Link>
                <Link className="nav-item-mobile" href="/contact">Contact</Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
