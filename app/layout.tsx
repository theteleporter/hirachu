import type { Metadata } from "next";
import { Geist, Geist_Mono, Hachi_Maru_Pop } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/sections/layout/header";
import { Footer } from "@/components/sections/layout/footer";
import { generateOrganizationSchema } from "@/lib/schema";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const hachiMaruPop = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hachi-maru-pop",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hirachu.vercel.app'),
  title: "Hirachu - Handcrafted Collectible Dolls",
  description:
    "Handcrafted collectible dolls where kawaii meets couture. Limited edition BJD dolls with unique styling and artisan craftsmanship.",
  openGraph: {
    title: "Hirachu - Handcrafted Collectible Dolls",
    description: "Handcrafted collectible dolls where kawaii meets couture.",
    type: "website",
    images: [
      {
        url: "/api/og?title=Hirachu&subtitle=Handcrafted Japanese Dolls",
        width: 1200,
        height: 630,
        alt: "Hirachu - Handcrafted Japanese Dolls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirachu - Handcrafted Collectible Dolls",
    description: "Handcrafted collectible dolls where kawaii meets couture.",
    images: ["/api/og?title=Hirachu&subtitle=Handcrafted Japanese Dolls"],
  },
  keywords: [
    "collectible dolls",
    "BJD",
    "ball jointed dolls",
    "kawaii",
    "handcrafted",
    "artisan dolls",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <meta name="apple-mobile-web-app-title" content="Hirachu" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hachiMaruPop.variable} antialiased font-mono selection:bg-pink-600 selection:text-black`}
      >
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Header />
            {children}
            <Footer />
            <CartDrawer />
            <Analytics />
            <SpeedInsights />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
