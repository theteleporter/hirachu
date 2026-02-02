"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Hachi_Maru_Pop } from "next/font/google";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/hero-banner.png"
        alt="Hirachu collectible dolls"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1
            className={`${hachiMaruPop.className} text-4xl md:text-6xl lg:text-7xl text-white mb-4 lowercase`}
          >
            hirachu
          </h1>
          <p className="text-white/90 text-sm md:text-base font-light tracking-wide mb-8 max-w-md">
            HANDCRAFTED COLLECTIBLE DOLLS FOR THE DISCERNING COLLECTOR. WHERE KAWAII MEETS COUTURE.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white border border-white transition-all duration-300"
            >
              SHOP NOW
            </button>
            <button
              type="button"
              className="border border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              OUR STORY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
