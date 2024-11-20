import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
export default function Login() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4">
            <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>Login/Register</h3>
            <p>You&#39;re one step away!</p>
            <input className="w-full max-w-[400px] rounded-full outline-none px-3 py-2 hover:border-indigo-600 focus:border-indigo-600 sm:py-3 mx-auto border border-solid border-indigo-400"
                placeholder="Email"
            />
            <input className="w-full max-w-[400px] rounded-full outline-none px-3 py-2 hover:border-indigo-600 focus:border-indigo-600 sm:py-3 mx-auto border border-solid border-indigo-400"
                placeholder="Password" type="password" />
            <div className="max-w-[400px] w-full mx-auto">
                <Button text='Submit' full />
            </div>
            <p className="text-center">Don&#39;t have an Account?<span className="text-indigo-600"> SignUp</span></p>


        </div>
    )
}