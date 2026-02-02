"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const newArrivals = [
  { id: 1, name: "Ren", price: 278, image: "/images/product-shot-boy-1.png" },
  { id: 2, name: "Kai", price: 288, image: "/images/product-shot-boy-2.png" },
  { id: 3, name: "Yuki", price: 268, image: "/images/product-shot-boy-3.png" },
  { id: 4, name: "Haru", price: 298, image: "/images/product-shot-boy-4.png" },
  { id: 5, name: "Sora", price: 258, image: "/images/product-shot-boy-5.png" },
];

export const NewArrivals = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="px-4 md:px-10 mb-10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-neutral-400 mb-2">JUST DROPPED</p>
            <h2 className="text-2xl md:text-3xl font-light">NEW ARRIVALS</h2>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-sm border-b border-white pb-1 hover:border-neutral-500 hover:text-neutral-400 transition-colors"
          >
            EXPLORE <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-48 md:h-64 mb-10 overflow-hidden">
        <Image
          src="/images/new-arrivals-banner.png"
          alt="New arrivals collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-4 md:px-10 pb-4">
          {newArrivals.map((doll, index) => (
            <motion.div
              key={doll.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[200px] md:w-[280px] group cursor-pointer"
            >
              <div className="relative aspect-square bg-neutral-900 mb-3 overflow-hidden">
                <Image
                  src={doll.image}
                  alt={doll.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{doll.name}</h3>
                <p className="text-sm text-neutral-400">${doll.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
