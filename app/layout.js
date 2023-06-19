import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Cabunilas Portfolio',
  description: 'Compilation of Web App Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
            <Navbar className="navbar" />
            <div className="mainLayout">   
                <div className="mainLayoutContentBox">
                    {children}
                </div>
                <div>
                <Footer />
                </div>
            </div>
            
        </div>
      </body>
    </html>
  )
}
