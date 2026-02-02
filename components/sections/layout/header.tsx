"use client";
import { useState } from "react";
import Link from "next/link";
import { Hachi_Maru_Pop } from "next/font/google";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-10 py-4 md:py-5 flex justify-between border-b">
      <Link href="/" className={`text-2xl font-light ${hachiMaruPop.className}`}>
        Hirachu
      </Link>
      <div className="font-mono font-light">
        <button
          type="button"
          className="border px-2 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          MENU
        </button>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black text-white p-4 z-50 flex flex-col">
            <button
              type="button"
              className="self-end border px-2 mb-4 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              CLOSE
            </button>
            <nav className="flex flex-col gap-5 items-start">
              {menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-3xl md:text-5xl font-thin"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
