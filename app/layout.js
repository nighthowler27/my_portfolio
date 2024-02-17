import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CopyRightBar from '@/components/copyRight/CopyRight';
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import Adstrip from '@/components/adStrip/Adstrip'
import PromoBar from "@/components/adStrip/promoBar/promoBar"


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
                                {/* <Adstrip />
                                <PromoBar /> */}
                                <Navbar />
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="bodyContent">
                                            {/* <Adstrip /> */}
                                            {children}
                                        </div>
                                    </div>
                                    <Footer />
                                </div>
                                <CopyRightBar />
                            </div>
                        </ThemeProvider>
                    </AuthProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
