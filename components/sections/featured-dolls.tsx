"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart } from "@phosphor-icons/react";

const featuredDolls = [
  { id: 1, name: "Sakura", price: 248, image: "/images/product-shot-girl-1.png", tag: "BESTSELLER", slug: "sakura" },
  { id: 2, name: "Luna", price: 268, image: "/images/product-shot-girl-2.png", tag: null, slug: "luna" },
  { id: 3, name: "Violet", price: 258, image: "/images/product-shot-girl-3.png", tag: "LIMITED", slug: "violet" },
  { id: 4, name: "Mochi", price: 238, image: "/images/product-shot-girl-4.png", tag: null, slug: "mochi" },
];

export const FeaturedDolls = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:py-24">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs text-neutral-500 mb-2">CURATED SELECTION</p>
          <h2 className="text-2xl md:text-3xl font-light">FEATURED DOLLS</h2>
        </div>
        <a
          href="/shop"
          className="text-sm border-b border-black pb-1 hover:border-neutral-400 hover:text-neutral-400 transition-colors"
        >
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {featuredDolls.map((doll, index) => (
          <motion.div
            key={doll.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/shop/${doll.slug}`} className="group cursor-pointer block">
              <div className="relative aspect-square bg-neutral-100 mb-3 overflow-hidden">
                <Image
                  src={doll.image}
                  alt={doll.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {doll.tag && (
                  <span className="absolute top-3 left-3 bg-black text-white text-[10px] px-2 py-1">
                    {doll.tag}
                  </span>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart size={16} weight="light" />
                </button>
              </div>
              <h3 className="text-sm font-medium mb-1">{doll.name}</h3>
              <p className="text-sm text-neutral-500">${doll.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
