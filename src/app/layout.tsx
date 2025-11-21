import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Artur Tatoo — Fábrica de Chacales',
  description: 'Estudio de tatuajes chicano - Artur Tatoo CDMX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
      <link href="https://fonts.cdnfonts.com/css/english-towne" rel="stylesheet" />
      <link href="https://fonts.cdnfonts.com/css/olde-english" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
