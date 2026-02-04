"use client";
import Image from "next/image";
import { motion } from "motion/react";

export function AboutContent() {
  return (
    <main>
      {/* Hero - Editorial Style */}
      <section className="relative min-h-screen flex items-center border-b">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <div className="relative bg-neutral-100">
            <Image
              src="/images/lifestyle-shot.png"
              alt="Hirachu dolls"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-neutral-50"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 md:px-10 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div></div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <p className="text-[10px] tracking-[0.3em] mb-6 text-neutral-400">ABOUT</p>
              <h1 className="font-hachi text-5xl md:text-7xl mb-8 lowercase leading-[1.1]">
                where<br />
                kawaii<br />
                meets<br />
                couture
              </h1>
              <p className="text-base text-neutral-600 font-light leading-relaxed max-w-md">
                Handcrafted collectible dolls that blur the line between art and companion. 
                Each piece tells its own story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story - Magazine Layout */}
      <section className="px-4 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <p className="text-[10px] tracking-[0.3em] mb-4 text-neutral-400">01 / ORIGIN</p>
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-[1.2]">
                Born from a<br />dream in Tokyo
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 space-y-6 text-base text-neutral-600 font-light leading-relaxed"
            >
              <p>
                Hirachu began in a small studio in Harajuku, where traditional Japanese dollmaking 
                met contemporary street fashion. We wanted to create something that didn't exist—
                dolls that felt alive, that could express personality, that collectors would cherish 
                not just as objects, but as companions.
              </p>
              <p>
                Our name comes from 平 (hira - flat, simple) and ちゅう (chū - small, endearing). 
                It's this tension between simplicity and detail, between cute and sophisticated, 
                that defines every piece we create.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="px-4 md:px-10 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative aspect-[16/7] bg-neutral-100 overflow-hidden"
        >
          <Image
            src="/images/product-shot-girl-1.png"
            alt="Craftsmanship detail"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Philosophy - Offset Layout */}
      <section className="px-4 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 md:col-start-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[10px] tracking-[0.3em] mb-4 text-neutral-400">02 / CRAFT</p>
                <h2 className="text-3xl md:text-4xl font-light mb-6 leading-[1.2]">
                  Made by hand,<br />one at a time
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 space-y-8"
            >
              <div>
                <h3 className="text-xs tracking-[0.2em] mb-3 font-medium">ARTISAN TRADITION</h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  Every face is hand-painted by skilled artisans. Every outfit is cut and sewn 
                  individually. No two dolls are exactly alike.
                </p>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] mb-3 font-medium">PREMIUM MATERIALS</h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  High-quality resin bodies, carefully sourced fabrics, and glass eyes that 
                  capture light beautifully.
                </p>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] mb-3 font-medium">LIMITED PRODUCTION</h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  Small batches mean every doll is special. When she's gone, she's gone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Simple Text */}
      <section className="border-y border-neutral-200">
        <div className="px-4 md:px-10 py-20 md:py-24 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-6xl md:text-7xl font-light mb-6 text-neutral-200">01</h3>
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                We don't mass produce. We don't cut corners. Every doll gets the time and 
                attention she deserves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-6xl md:text-7xl font-light mb-6 text-neutral-200">02</h3>
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                Fashion-forward designs inspired by Tokyo street style, haute couture, 
                and Japanese pop culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-6xl md:text-7xl font-light mb-6 text-neutral-200">03</h3>
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                Built for collectors who understand that dolls aren't toys—they're art, 
                companions, and expressions of self.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quote */}
        <div className="px-4 md:px-10 py-20 md:py-24 bg-neutral-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-hachi text-3xl md:text-5xl mb-6 lowercase leading-[1.4]">
              "every doll has a soul,<br />
              waiting for the right person<br />
              to bring her home"
            </p>
            <p className="text-[10px] text-neutral-400 tracking-[0.3em]">— HIRACHU STUDIO</p>
          </motion.div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="px-4 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.3em] mb-4 text-neutral-400">READY?</p>
            <h2 className="font-hachi text-4xl md:text-6xl lowercase leading-[1.1]">
              find your<br />companion
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="/shop"
            className="group flex items-center gap-4"
          >
            <span className="text-xs tracking-[0.3em] font-medium">BROWSE COLLECTION</span>
            <div className="w-12 h-12 border border-black flex items-center justify-center group-hover:bg-black transition-colors">
              <span className="text-2xl group-hover:text-white transition-colors">→</span>
            </div>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
