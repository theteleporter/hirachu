"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
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
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-neutral-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "SUBSCRIBING..." : "SUBSCRIBE"} <PaperPlaneTiltIcon size={16} weight="light" />
          </button>
        </form>

        {message && (
          <p className={`text-sm mt-4 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <p className="text-[10px] text-neutral-400 mt-4 normal-case">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};
