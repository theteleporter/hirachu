"use client";
import Marquee from "react-fast-marquee";

const announcements = [
  "🎀 NEW ARRIVALS: Spring Collection Now Available",
  "✨ FREE SHIPPING on orders over $200",
  "💝 Limited Edition Dolls dropping soon",
  "🌸 Handcrafted with love in every detail",
];

export const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white py-2 text-xs overflow-hidden">
      <Marquee speed={40} gradient={false}>
        {announcements.map((announcement, index) => (
          <span key={index} className="mx-8 font-light tracking-wide">
            {announcement}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
