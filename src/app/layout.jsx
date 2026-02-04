import { Nunito } from 'next/font/google'
import './assets/css/materialdesignicons.min.css'
import Switcher from './components/switcher';

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['200','300','400','500','600','700','800','900'],
});


export const metadata = {
  title: "Landrick - Next Js Multipurpose Landing & Admin Dashboard Template",
  description: "Landrick - Next Js Multipurpose Landing & Admin Dashboard Template",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="ltr">
      <head>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
      </head>
      <body className={`${nunito.variable} position-relative`}>
         <Switcher/>
  
        {children}</body>
    </html>
  );
}
