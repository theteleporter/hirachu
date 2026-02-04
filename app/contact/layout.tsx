import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Hirachu",
  description: "Get in touch with Hirachu. Questions about our dolls, custom orders, or collaborations? We'd love to hear from you.",
  openGraph: {
    title: "Contact Us - Hirachu",
    description: "Get in touch with Hirachu. We'd love to hear from you.",
    images: [
      {
        url: "/api/og?title=Contact Us&subtitle=Let's Talk · Tokyo",
        width: 1200,
        height: 630,
        alt: "Contact Hirachu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Hirachu",
    description: "Get in touch with Hirachu. We'd love to hear from you.",
    images: ["/api/og?title=Contact Us&subtitle=Let's Talk · Tokyo"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
