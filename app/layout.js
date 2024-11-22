import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";




const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "AuraTrack",
  description: "Track your daily aura every day of the year!",
};
  
export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>AuaTrack</h1>
      </Link>
      <Logout/>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
     
        <p className={'text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500 ' + fugaz.className}>Built by Aura-aplus </p>
        
     
      <h3 className="pt-[24px] text-center text-[14px] text-slate-800 font-medium">&copy; 2024 AuraTrack. All rights reserved.</h3>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <AuthProvider>
        <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800   ' + opensans.className}>
          {header}
          {children}
          {footer}
        </body>
        </AuthProvider>
    </html>
  );
}
