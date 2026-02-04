"use client";
import Link from "next/link";
import { useActionState } from "react";
import { subscribeToNewsletter } from "@/lib/actions";

export const Footer = () => {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, null);

  return (
    <footer className="border-t border-neutral-200">
      {/* Main Footer */}
      <div className="px-4 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Brand + Newsletter */}
          <div className="grid md:grid-cols-2 gap-12 pb-16 md:pb-20 border-b border-neutral-200">
            <div>
              <h3 className="font-hachi text-4xl md:text-5xl mb-4 lowercase leading-tight">
                hirachu
              </h3>
              <p className="text-base text-neutral-600 font-light leading-relaxed max-w-sm">
                Handcrafted collectible dolls.
                <br />
                Where kawaii meets couture.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-xs tracking-[0.2em] mb-4 font-medium">
                STAY UPDATED
              </p>
              <form action={formAction} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  disabled={isPending}
                  className="flex-1 px-0 py-3 border-b border-neutral-300 text-base focus:outline-none focus:border-black transition-colors bg-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-6 py-3 border-b border-black text-xs tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                >
                  {isPending ? "..." : "JOIN"}
                </button>
              </form>
              {state && (
                <p
                  className={`text-xs mt-2 ${state.success ? "text-green-600" : "text-red-600"}`}
                >
                  {state.success ? state.message : state.error}
                </p>
              )}
            </div>
          </div>

        {/* Bottom Row - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-20">
          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 font-medium text-neutral-400">
              SHOP
            </h4>
            <nav className="space-y-4">
              {shopLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.urlTo}
                  className="block text-base text-neutral-600 hover:text-black transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 font-medium text-neutral-400">
              INFO
            </h4>
            <nav className="space-y-4">
              {infoLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.urlTo}
                  className="block text-base text-neutral-600 hover:text-black transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 font-medium text-neutral-400">
              LEGAL
            </h4>
            <nav className="space-y-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.urlTo}
                  className="block text-base text-neutral-600 hover:text-black transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.2em] mb-6 font-medium text-neutral-400">
              CONNECT
            </h4>
            <div className="space-y-6">
              <Link
                href="https://www.instagram.com/hirachu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-neutral-600 hover:text-black transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://x.com/hirachu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-neutral-600 hover:text-black transition-colors"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
};

const shopLinks = [
  { text: "All Dolls", urlTo: "/shop" },
  { text: "New Arrivals", urlTo: "/shop?filter=new" },
  { text: "Girl Dolls", urlTo: "/shop?filter=girl" },
  { text: "Boy Dolls", urlTo: "/shop?filter=boy" },
];

const infoLinks = [
  { text: "About", urlTo: "/about" },
  { text: "Contact", urlTo: "/contact" },
];

const legalLinks = [
  { text: "Privacy", urlTo: "/privacy" },
  { text: "Terms", urlTo: "/terms" },
  { text: "Shipping", urlTo: "/shipping" },
];
