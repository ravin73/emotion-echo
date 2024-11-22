import React from "react";
import Main from "./Main";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";
import Link from "next/link";
import CallToAction from "./CallToAction";


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
    return (
        <div className="py-4  md:py-10 flex flex-col gap-5 sm:gap-10  md:gap-10">
            <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}><span className='textGradient'> AuraTracker</span> helps you track your<span className="textGradient"> daily </span> Aura!</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px] ">Create you aura 🗿 and see How you feel<span className="font-semibold"> every-day of the year</span></p>
            <CallToAction/>
            <Calendar demo />
        </div>
    )
}