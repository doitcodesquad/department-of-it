'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import test from '/public/computer.svg';
import Gallery from './Gallery'; 

const LandingPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const lines = [];
    const numLines = 50;
    const speed = 2;
    const centerBuffer = 200;

    for (let i = 0; i < numLines; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.max(canvas.width, canvas.height) / 2 + centerBuffer;
      lines.push({
        x: Math.cos(angle) * radius + canvas.width / 2,
        y: Math.sin(angle) * radius + canvas.height / 2,
        angle: angle,
        length: Math.random() * 30 + 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        const endX = line.x - Math.cos(line.angle) * line.length;
        const endY = line.y - Math.sin(line.angle) * line.length;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(0, 0, 0, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        line.x -= Math.cos(line.angle) * line.speed * speed;
        line.y -= Math.sin(line.angle) * line.speed * speed;
        line.length += line.speed * 0.1;

        const distanceFromCenter = Math.sqrt(
          Math.pow(line.x - canvas.width / 2, 2) +
          Math.pow(line.y - canvas.height / 2, 2)
        );

        if (distanceFromCenter < centerBuffer || distanceFromCenter > Math.max(canvas.width, canvas.height) / 2) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.max(canvas.width, canvas.height) / 2;
          line.x = Math.cos(angle) * radius + canvas.width / 2;
          line.y = Math.sin(angle) * radius + canvas.height / 2;
          line.angle = angle;
          line.length = Math.random() * 30 + 20;
          line.opacity = Math.random() * 0.3 + 0.1;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const features = [
    {
      title: 'Community Collaboration',
      description: 'Join a vibrant community where coders, designers, and tech enthusiasts collaborate to sharpen their skills through real-world projects and competitions.',
      icon: 'mdi:account-multiple'
    },
    {
      title: 'Diverse Learning',
      description: 'Explore a broad spectrum of technologies from web development and AI to game design, with workshops and mentorship from experienced members.',
      icon: 'mdi:book-open-page-variant'
    },
    {
      title: 'Event-Driven Engagement',
      description: 'Engage in frequent coding competitions, hackathons, and design challenges that push the boundaries of innovation and creativity.',
      icon: 'mdi:calendar-star'
    },
    {
      title: 'Tech Talks & Workshops',
      description: 'Learn from experts and gain insights into the latest technological advancements through regular talks, seminars, and hands-on workshops.',
      icon: 'mdi:teach'
    },
    {
      title: 'Career and Industry Connections',
      description: 'Build your network with industry connections, get internship referrals, and career guidance to pave your way into the tech industry.',
      icon: 'mdi:briefcase-account'
    },
    {
      title: 'Inclusive Environment',
      description: 'Foster an inclusive environment that welcomes members from all backgrounds to learn, grow, and contribute to the technology community.',
      icon: 'mdi:earth'
    }
  ];

  return (
    <>
      <div className="relative w-screen h-screen bg-emerald-50 text-center">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
        <div className="relative flex flex-col gap-24 items-center justify-between h-full w-full md:px-24">
          <div className="mt-[11rem]">
            <h1 className="text-[3rem] md:text-9xl font-black mb-8">
              CodeSquad
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Uniting Creativity and Code, Powering Innovation
            </p>
            <Link href="/register" className="register-button px-24 py-3">
              Join Us
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center -translate-y-[14.42rem] md:translate-y-0">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="h-[11rem] md:h-[14.42rem] border border-black"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-11 -translate-y-[14.42rem] md:translate-y-0">
        <div className="w-[21rem] h-[21rem] md:w-[30rem] md:h-[30rem] rounded-full border-2 border-black overflow-hidden">
          <Image
            src={test}
            alt="Competitive Coding Illustration"
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="h-[14.42rem] border border-black"></div>
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>

      <div className="border-t-2 border-black md:px-40 p-3 md:p-[7.4rem]">
        <h1 className="text-4xl font-black text-center mb-11">
          FEATURES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col justify-center items-center p-4 border border-black/30">
              <div className="flex w-fit justify-center p-3 rounded-full border border-black">
                <Icon icon={feature.icon} className="text-4xl" />
              </div>
              <h2 className="text-xl font-semibold my-2">{feature.title}</h2>
              <p className="text-black/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-screen border-b-2 border-black">
        <Gallery />
      </div>

      <div className='flex gap-2 fixed bottom-0 right-3 p-1 rounded-md '>
        <span className='font-semibold'>
          Website by
        </span>
        <a href="https://github.com/Naveed-SNR" className="hover:-translate-y-1 duration-100">Naveed</a>
        <a href="https://github.com/TAWSEEFSHAMIM" className="hover:-translate-y-1 duration-100">Tawseef</a>
        <a href="https://github.com/devdaim6" className="hover:-translate-y-1 duration-100">Daim</a>
        <a href="https://github.com/mikhlas99" className="hover:-translate-y-1 duration-100">Ikhlas</a>
      </div>
    </>
  );
};

export default LandingPage;