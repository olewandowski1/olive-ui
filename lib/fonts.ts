import { Geist_Mono, Montserrat } from 'next/font/google';

export const fontSans = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const fontMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
