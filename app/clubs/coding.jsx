import React from 'react'
import Image from 'next/image'
import test from '/public/computer.svg'
import { Icon } from '@iconify/react'
export default function ClubDetails() {
    const clubData = {
        name: 'COMPETITIVE CODING',
        memberCount: '30',
        leader: 'Naveed SNR',
        meetingDay: 'Tuesday',
        meetingTime: '21:00',
    }
    return (
        <div className="h-screen">
            <div className="md:h-[83%] h-full w-full bg-emerald-50 md:border border-black relative overflow-hidden">
                <header className="w-full md:w-1/2 bg-orange-5 border-b border-t md:border-t-0 border-r border-black py-2 md:py-3 flex justify-center items-center text-lg md:text-xl">
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1 w-max border-black/30 px-3">
                            <Icon icon="material-symbols:person" />
                            <p>{`${clubData.memberCount} Active Members`}</p>
                        </div>
                        {/* <div className="flex items-center gap-1 w-max">
                                <Icon icon="material-symbols:social-leaderboard-outline" />
                                <p>Founded: 2018</p>
                            </div> */}
                    </div>

                </header>
                <div className="flex md:flex-row flex-wrap w-full h-full justify-center md:justify-between relative ">
                    <div className="flex flex-col md:px-14 md:ms-8 mt-3 p-3 text-[3rem] md:text-8xl w-full md:w-1/2 font-headline leading-tight">
                        <div>
                            <span className="outline-text">WELCOME TO</span><br />
                            {`${clubData.name}`}<br />
                        </div>
                        <div className="flex flex-col  md:ms-4 m-2 md:m-3 text-2xl ">
                            <div className="flex items-center w-max gap-2">
                                <p>LED BY</p>
                            </div>
                            <p className="font-light text-2xl">Naveed SNR</p>
                        </div>
                        <button className="md:ms-4 md:w-1/2 px-11 py-1 bg-primary text-lg font-light border-2 border-black">
                            Become A Member
                        </button>
                        <div className="md:hidden flex border border-black justify-center items-center gap-3 text-lg mt-3 font-thin h-11 py-4 px-1">
                            <Icon icon="streamline:group-meeting-call-solid" />
                            <p>Meets {`Meets ${clubData.meetingDay} at ${clubData.meetingTime}`}</p>
                        </div>
                    </div>


                    <div className="relative flex lg:absolute lg:right-0 lg:bottom-4  w-max h-max border border-black m-4 md:m-0  ">
                        <Image
                            src={test}
                            alt="Competitive Coding Illustration"
                            width={542}
                            height={542}
                            className="mb-11"
                        />
                    </div>
                </div>
                <div className="hidden md:flex flex-col justify-center mb-8 md:mb-0">
                    <div className="absolute p-3 border-t border-r border-black h-32 bottom-0 left-0 flex-col justify-center items-center ">
                        <span className="text-sm">SCROLL</span>
                        <div className="w-full flex justify-center">
                            {/* Arrow Icon */}
                            <svg className="scale-y-110 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.83} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex md:w-1/2 md:absolute md:z-40 md:bottom-0 md:left-[10.721rem] border-l border-t border-black justify-center items-center gap-3 text-xl mt-3 font-thin h-11 md:py-4 px-8">
                    <Icon icon="streamline:group-meeting-call-solid" />
                    <p>Meets Tuesdays at 7PM</p>
                </div>

            </div>
        </div>
    )
}