import Link from "next/link";
import { InstagramLogo, TwitterLogo, TiktokLogo, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const Footer = () => (
  <footer className="bg-neutral-50 border-t">
    {/* Main Footer */}
    <div className="px-4 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
        {/* Left - Brand Story */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h3 className="font-hachi text-5xl md:text-6xl mb-3 lowercase leading-tight">
              hirachu
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-sm">
              Where every doll tells a story. Handcrafted collectibles that blend kawaii 
              aesthetics with high fashion sensibilities.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Heart size={14} weight="fill" className="text-pink-400" />
            <span>Crafted with love since 2024</span>
          </div>
        </div>

        {/* Right - Links Grid */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
              <Sparkle size={12} weight="fill" />
              Shop
            </h4>
            <nav className="space-y-3">
              {shopLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.urlTo}
                  className="block text-sm text-neutral-600 hover:text-black hover:translate-x-1 transition-all duration-200"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-medium mb-4">Info</h4>
            <nav className="space-y-3">
              {infoLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.urlTo}
                  className="block text-sm text-neutral-600 hover:text-black hover:translate-x-1 transition-all duration-200"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Follow</p>
                <div className="flex gap-3">
                  <Link 
                    href="#" 
                    className="w-9 h-9 border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    <InstagramLogo size={16} weight="regular" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-9 h-9 border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    <TwitterLogo size={16} weight="regular" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-9 h-9 border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    <TiktokLogo size={16} weight="regular" />
                  </Link>
                </div>
              </div>
              
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 mb-1">Email</p>
                <a href="mailto:hello@hirachu.com" className="text-sm hover:underline">
                  hello@hirachu.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-neutral-200 px-4 md:px-10 py-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-4">
          <p>© 2026 Hirachu</p>
          <span className="text-neutral-300">•</span>
          <p className="font-light">All dolls reserved</p>
        </div>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.text}
              href={link.urlTo}
              className="hover:text-black transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const shopLinks = [
  { text: "All Dolls", urlTo: "/shop" },
  { text: "New Arrivals", urlTo: "/shop" },
  { text: "Bestsellers", urlTo: "/shop" },
  { text: "Accessories", urlTo: "/shop" },
];

const infoLinks = [
  { text: "About Us", urlTo: "/about" },
  { text: "Our Story", urlTo: "/about" },
  { text: "Contact", urlTo: "/contact" },
  { text: "FAQ", urlTo: "/contact" },
];

const legalLinks = [
  { text: "Privacy", urlTo: "/privacy" },
  { text: "Terms", urlTo: "/terms" },
  { text: "Shipping", urlTo: "/shipping" },
];
