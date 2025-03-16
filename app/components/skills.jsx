import React from 'react'
import { motion, stagger } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function skills() {
    const terminalVariants = {
        offscreen: {

            x: -100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.82,
            }
        }
    };


    const lineVariants = {

        offscreen: {
            opacity: 0,
            height: 0,
        },
        onscreen: {
            opacity: 1,
            height: 300,
            transition: {
                type: "spring",
                duration: 1.82,
            }
        }
    }
    const infoVariants = {
        offscreen: {

            x: 100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.82,
                staggerChildren: 0.3,
            }
        }
    }
  return (
    <motion.div
    layout
    initial="offscreen"
    whileInView="onscreen"
    variants={infoVariants}
    className="bg-emerald-50 md:mt-11 w-full  md:w-9/12 h-fit p-3 md:p-11 border border-black ">
    <div className="text-4xl font-bold">What we do?</div>
    <div className="text-black/90 my-3">{`Here's a few skills that we focus on. We host a number of activites to help you develop useful experiences and enhance your creativity and productivity.`}</div>
    <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {['AI/ML', 'UI/UX', 'Web dev', 'Research', 'Gate'].map((skill) => (
            <motion.div
                variants={infoVariants}
                key={skill}
                className="flex flex-col gap-3 justify-center items-center bg-orange-50 w-24 h-24 min-w-24 min-h-24 md:w-32 md:h-32 p-3 border border-black"

            >
                <Icon icon={getIconForSkill(skill)} className="text-3xl md:text-8xl" />
                <div>{skill}</div>
            </motion.div>
        ))}
    </div>
</motion.div>
  )
}


function getIconForSkill(skill) {
    switch (skill) {
        case 'AI/ML':
            return "heroicons:cpu-chip-solid";
        case 'UI/UX':
            return "fluent:design-ideas-16-filled";
        case 'Web dev':
            return "ri:code-box-fill";
        case 'Research':
            return "material-symbols-light:lab-research-sharp";
        case 'Gate':
            return "healthicons:i-exam-qualification";
        default:
            return "";
    }
}