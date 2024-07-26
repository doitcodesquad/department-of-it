import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import test from '/public/Coding.svg'

export default function design() {
  const club =
  {
      id: 1,
      name: 'Chess Club',
      description: 'For chess enthusiasts of all levels. Join us to improve your strategic thinking and have fun playing chess with fellow members.',
      image: 'https://example.com/chess-club.jpg',
      logo: 'https://example.com/chess-club-logo.png',
      memberCount: 42,
      lead: {
          name: 'Alice Johnson',
          avatar: 'https://example.com/alice-avatar.jpg'
      }
  }
  const cardVariants = {
      offscreen: {
          y: 50,
          opacity: 0,
      },
      onscreen: {
          y: 0,
          opacity: 1,
          transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1.1
          }
      }
  };
  return (
    <div className="py-3 justify-between flex gap-3 border-2 border-black">
    <div className="w-full"> 
        <div className="flex gap-3 text-[3rem] font-extrabold h-11  items-center justify-start py-11 px-3">
            <Icon icon="ri:code-box-fill" className="text-[4rem]" />
            <p>Competitive Coding</p>
        </div>
        <div className="mt-2 mx-3 py-3 flex justify-center items-center gap-2 text-xl border-2 border-black/30">
            <div className="flex gap-3">
                <div className="flex items-center gap-2 border-r border-black/30 px-3">
                    <Icon icon="material-symbols:person" />
                    <p>30 Members</p>
                </div>
                <div className="flex items-center gap-2 border-r border-black/30 px-3">
                    <Icon icon="material-symbols:social-leaderboard-outline" />
                    <p>Lead by Naveed SNR</p>
                </div>
                <div className="flex items-center gap-2  px-3">
                    <Icon icon="material-symbols:social-leaderboard-outline" />
                    <p>Founded: 2018</p>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full flex flex-col justify-center gap-3 items-center border-l-2 border-black  text-2xl ">
        <div className="flex justify-start items-center gap-3 text-[2.1rem] font-medium h-11 py-11 px-3">
            <Icon icon="streamline:group-meeting-call-solid" />
            <p>Meetings on Tuesdays at 7PM</p>
        </div>
        <div className="w-full flex justify-end px-3">
            <button className="w-full px-11 py-2 bg-primary text-lg border-2 border-black">Join</button>
        </div>
    </div>
</div>
  )
}
