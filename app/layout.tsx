import './globals.css'

export const metadata = {
  title: 'Topgg bingo!',
  description: 'Wow!',
}

import { Manrope } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body className='bg-[#070510] text-white'>
        <div className='from-[#ff33661a] to-[#ff336600] bg-gradient-to-br w-screen h-screen absolute z-[-1]'></div>
        {children}
      </body>
    </html>
  )
}
// #070510
// brand-20 #ff336633
