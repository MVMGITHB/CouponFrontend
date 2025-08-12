import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/context/auth";
import "./globals.css";
import Header from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import CouponsCulturePopup from "@/components/popup/registerpopup";
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <CouponsCulturePopup />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
