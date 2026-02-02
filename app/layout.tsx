import type { Metadata } from "next";
import { Geist, Geist_Mono, Hachi_Maru_Pop } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/sections/layout/header";
import { Footer } from "@/components/sections/layout/footer";
import { generateOrganizationSchema } from "@/lib/schema";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hachiMaruPop = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hachi-maru-pop",
});

export const metadata: Metadata = {
  title: "Hirachu - Handcrafted Collectible Dolls",
  description: "Handcrafted collectible dolls where kawaii meets couture. Limited edition BJD dolls with unique styling and artisan craftsmanship.",
  openGraph: {
    title: "Hirachu - Handcrafted Collectible Dolls",
    description: "Handcrafted collectible dolls where kawaii meets couture.",
    type: "website",
  },
  keywords: ["collectible dolls", "BJD", "ball jointed dolls", "kawaii", "handcrafted", "artisan dolls"],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hachiMaruPop.variable} antialiased font-mono`}
      >
        <CartProvider>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
