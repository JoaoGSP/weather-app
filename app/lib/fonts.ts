import { Josefin_Sans, Roboto, Montserrat, Open_Sans, Nunito } from 'next/font/google';

export const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin' });
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-roboto',
});
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
export const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-openSans' });
export const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
