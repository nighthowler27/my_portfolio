import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Cabunilas Portfolio',
  description: 'Compilation of Web App Development',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        
            <ThemeContextProvider>
                <ThemeProvider>
                    <div className="container">
                        <div className="wrapper">
                            <Navbar className="navbar" /> 
                            <div className="mainLayoutContentBox">
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </ThemeContextProvider>
        
      </body>
    </html>
  )
}
