import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import SidePanel from '@/components/sidepanel/SidePanel';
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
            <Navbar />
            <div className="main">         
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
      </body>
    </html>
  )
}
