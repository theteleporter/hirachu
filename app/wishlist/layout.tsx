import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wishlist - Hirachu",
  description: "Your saved favorite dolls from Hirachu's collection. Never lose track of the pieces you love.",
  openGraph: {
    title: "My Wishlist - Hirachu",
    description: "Your saved favorite dolls from Hirachu's collection.",
    images: [
      {
        url: "/api/og?title=My Wishlist&subtitle=Saved Favorites",
        width: 1200,
        height: 630,
        alt: "Wishlist Hirachu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Wishlist - Hirachu",
    description: "Your saved favorite dolls from Hirachu's collection.",
    images: ["/api/og?title=My Wishlist&subtitle=Saved Favorites"],
  },
};

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
