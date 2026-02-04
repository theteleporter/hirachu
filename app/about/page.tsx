import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us - Hirachu",
  description: "Handcrafted Japanese dolls where tradition meets contemporary fashion. Each Hirachu doll is a labor of love, meticulously created by artisans.",
  openGraph: {
    title: "About Us - Hirachu",
    description: "Handcrafted Japanese dolls where tradition meets contemporary fashion.",
    images: [
      {
        url: "/api/og?title=About Hirachu&subtitle=Crafted with Love · Tokyo",
        width: 1200,
        height: 630,
        alt: "About Hirachu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Hirachu",
    description: "Handcrafted Japanese dolls where tradition meets contemporary fashion.",
    images: ["/api/og?title=About Hirachu&subtitle=Crafted with Love · Tokyo"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
