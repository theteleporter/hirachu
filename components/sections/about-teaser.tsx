"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Hachi_Maru_Pop } from "next/font/google";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export const AboutTeaser = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src="/images/lifestyle-shot.png"
            alt="Hirachu craftsmanship"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs text-neutral-500 mb-2">OUR STORY</p>
          <h2
            className={`${hachiMaruPop.className} text-3xl md:text-4xl lg:text-5xl mb-6 lowercase`}
          >
            crafted with love
          </h2>
          <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6 normal-case">
            Each Hirachu doll is a labor of love — meticulously handcrafted by artisans who blend 
            traditional Japanese dollmaking with contemporary fashion sensibilities. From the delicate 
            hand-painted features to the couture-inspired wardrobes, every detail tells a story.
          </p>
          <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-8 normal-case">
            We believe dolls aren&apos;t just toys — they&apos;re art, companions, and expressions of personal style.
          </p>
          <button
            type="button"
            className="self-start border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            LEARN MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
};
