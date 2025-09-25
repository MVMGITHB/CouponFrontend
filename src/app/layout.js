import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/context/auth";
import "./globals.css";
import Header from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coupons Culture",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />


        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YVL1SYGDSV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YVL1SYGDSV');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />

          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
