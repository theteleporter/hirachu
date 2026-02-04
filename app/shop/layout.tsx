import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Dolls - Hirachu",
  description: "Browse our complete collection of handcrafted Japanese dolls. Girl dolls, boy dolls, and limited edition pieces.",
  openGraph: {
    title: "Shop All Dolls - Hirachu",
    description: "Browse our complete collection of handcrafted Japanese dolls.",
    images: [
      {
        url: "/api/og?title=Shop Collection&subtitle=Handcrafted Japanese Dolls",
        width: 1200,
        height: 630,
        alt: "Shop Hirachu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Dolls - Hirachu",
    description: "Browse our complete collection of handcrafted Japanese dolls.",
    images: ["/api/og?title=Shop Collection&subtitle=Handcrafted Japanese Dolls"],
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
