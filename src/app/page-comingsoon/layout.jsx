import { Nunito } from 'next/font/google'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['200','300','400','500','600','700','800','900'],
});

export const metadata = {
  title: "mctintz.com - Coming Soon",
  description: "mctintz.com is coming soon. Book your appointment today.",
};

export default function ComingSoonLayout({ children }) {
  return (
    <body className={`${nunito.variable} position-relative`}>
      {children}
    </body>
  );
}
