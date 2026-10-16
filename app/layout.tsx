import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const GA_ID = "G-F5M3EZV863";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Yala Leopard Safari Tours | Sri Lanka Wildlife Safaris",
  verification: { google: "KfVr9_1ROHev6E-JoFb8MhNsX6Vy_Sg3vxDo5Ezz8LI" },
  description:
    "Small-group leopard and wildlife safaris across Yala, Udawalawe and Bundala National Parks, led by experienced local drivers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
