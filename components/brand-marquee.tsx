"use client";
import Marquee from "react-fast-marquee";

const brands = [
  "HANDCRAFTED",
  "LIMITED EDITION",
  "ARTISAN QUALITY",
  "KAWAII × COUTURE",
  "COLLECTIBLE",
  "UNIQUE STYLING",
  "BJD DOLLS",
  "MADE WITH LOVE",
];

export const BrandMarquee = () => {
  return (
    <div className="border-t border-b py-6 bg-neutral-50">
      <Marquee speed={50} gradient={false}>
        {brands.map((brand, index) => (
          <span key={index} className="mx-12 text-xs font-light tracking-widest text-neutral-400">
            {brand}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
