import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CopyRightBar from '@/components/copyRight/CopyRight';
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Cabunilas Portfolio',
  description: 'Portfolio and Personal Website',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
            <ThemeContextProvider>
                <AuthProvider>
                    <ThemeProvider>
                        <div className="bodyHtml">
                        <div className="container">
                            <Navbar />
                            <div className="wrapper">
                                    <div className="bodyContent">
                                        {children}
                                    </div>
                                <Footer />
                                <CopyRightBar />
                            </div>
                        </div>
                        </div>
                    </ThemeProvider>
                </AuthProvider>
            </ThemeContextProvider>
      </body>
    </html>
  )
}
