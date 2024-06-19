import { Orbitron } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import { inter, roboto_mono, exo_2 } from '@/app/fonts'


export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${roboto_mono.variable} ${exo_2.variable}`}>
        <body className={`flex flex-col px-4 py-2 min-h-screen bg-orange-50 ${inter.className}`}>
        <header >
          <NavBar />
        </header>
        <main className='py-3 grow'>
            {children}
        </main>
        <footer className='text-center text-xs border-t py-3'>
            Game data and images courtesy 
            of <a href="https://rawg.io/" target='_blank' className='text-orange-800  hover:text-orange-500 hover:underline'>RAWG</a>
        </footer>
        </body>
    </html>
  );
}
