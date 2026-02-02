"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Shopify/Klaviyo
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="px-4 md:px-10 py-16 md:py-24 bg-neutral-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-xs text-neutral-500 mb-2">STAY IN THE LOOP</p>
        <h2 className="font-hachi text-2xl md:text-3xl mb-4 lowercase">
          join the family
        </h2>
        <p className="text-sm text-neutral-600 font-light mb-8 normal-case">
          Be the first to know about new releases, exclusive drops, and special offers. 
          No spam, just dolls.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL"
            required
            className="flex-1 px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors"
          >
            SUBSCRIBE <PaperPlaneTilt size={16} weight="light" />
          </button>
        </form>

        <p className="text-[10px] text-neutral-400 mt-4 normal-case">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};
