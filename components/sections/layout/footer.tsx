import Link from "next/link";
import { Hachi_Maru_Pop } from "next/font/google";
import { InstagramLogo, TwitterLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export const Footer = () => (
  <footer className="border-t bg-white">
    <div className="px-4 md:px-10 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h3 className={`${hachiMaruPop.className} text-2xl mb-4 lowercase`}>hirachu</h3>
          <p className="text-xs text-neutral-500 font-light normal-case leading-relaxed">
            Handcrafted collectible dolls where kawaii meets couture.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs font-medium mb-4">SHOP</h4>
          <nav className="flex flex-col gap-2">
            {shopLinks.map((link) => (
              <Link
                key={link.text}
                href={link.urlTo}
                className="text-xs text-neutral-500 hover:text-black transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-xs font-medium mb-4">INFO</h4>
          <nav className="flex flex-col gap-2">
            {infoLinks.map((link) => (
              <Link
                key={link.text}
                href={link.urlTo}
                className="text-xs text-neutral-500 hover:text-black transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xs font-medium mb-4">FOLLOW</h4>
          <div className="flex gap-3">
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              <InstagramLogo size={20} weight="light" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              <TwitterLogo size={20} weight="light" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              <TiktokLogo size={20} weight="light" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-neutral-400">
          © 2026 HIRACHU. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.text}
              href={link.urlTo}
              className="text-[10px] text-neutral-400 hover:text-black transition-colors"
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
  { text: "ALL DOLLS", urlTo: "/shop" },
  { text: "NEW ARRIVALS", urlTo: "/new" },
  { text: "BESTSELLERS", urlTo: "/bestsellers" },
  { text: "ACCESSORIES", urlTo: "/accessories" },
];

const infoLinks = [
  { text: "ABOUT US", urlTo: "/about" },
  { text: "CONTACT", urlTo: "/contact" },
  { text: "FAQ", urlTo: "/faq" },
  { text: "SHIPPING", urlTo: "/shipping" },
];

const legalLinks = [
  { text: "PRIVACY POLICY", urlTo: "/privacy" },
  { text: "TERMS OF SERVICE", urlTo: "/terms" },
];
