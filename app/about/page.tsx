"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Hachi_Maru_Pop } from "next/font/google";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/lifestyle-shot.png"
          alt="About Hirachu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${hachiMaruPop.className} text-4xl md:text-6xl text-white lowercase`}
          >
            our story
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 md:px-10 py-16 md:py-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-neutral-500 mb-4">WHERE KAWAII MEETS COUTURE</p>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            CRAFTED WITH LOVE, COLLECTED WITH PASSION
          </h2>
          
          <div className="space-y-6 text-sm md:text-base text-neutral-600 font-light leading-relaxed">
            <p>
              Hirachu began as a dream — to create dolls that transcend the boundary between 
              toy and art, between tradition and modernity. Each piece is a labor of love, 
              meticulously handcrafted by skilled artisans who blend traditional Japanese 
              dollmaking techniques with contemporary fashion sensibilities.
            </p>
            
            <p>
              Our name, "Hirachu," draws inspiration from the Japanese words for "flat" (平 - hira) 
              and "small" (ちゅう - chū), reflecting our philosophy of finding beauty in simplicity 
              and attention to the smallest details. Every doll tells a story through its hand-painted 
              features, carefully selected fabrics, and unique personality.
            </p>
            
            <p>
              We believe that dolls aren't just collectibles — they're companions, expressions of 
              personal style, and works of art. Whether you're a seasoned collector or discovering 
              the world of ball-jointed dolls for the first time, each Hirachu doll is designed to 
              bring joy, inspire creativity, and become a cherished part of your collection.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4">OUR VALUES</h2>
            <p className="text-sm text-neutral-600 font-light">What makes Hirachu special</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8">THE HIRACHU DIFFERENCE</h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="border-b pb-6 last:border-b-0">
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const values = [
  {
    title: "ARTISAN CRAFTSMANSHIP",
    description: "Each doll is handcrafted by skilled artisans with years of experience in traditional dollmaking techniques.",
  },
  {
    title: "UNIQUE DESIGN",
    description: "We blend kawaii aesthetics with high fashion, creating dolls that are both adorable and sophisticated.",
  },
  {
    title: "LIMITED EDITIONS",
    description: "Every piece is produced in small batches, ensuring exclusivity and collectible value.",
  },
];

const features = [
  {
    title: "Hand-Painted Features",
    description: "Every face is painted by hand, ensuring each doll has its own unique expression and character.",
  },
  {
    title: "Premium Materials",
    description: "We use only the finest materials — from high-quality resin for the body to carefully sourced fabrics for the outfits.",
  },
  {
    title: "Articulated Joints",
    description: "Full articulation allows for dynamic posing and photography, bringing your doll to life.",
  },
  {
    title: "Fashion-Forward Styling",
    description: "Our design team creates original outfits inspired by contemporary fashion, streetwear, and haute couture.",
  },
];
