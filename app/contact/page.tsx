"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { PaperPlaneTilt, InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service
    console.log("Contact form:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero */}
      <section className="px-4 md:px-10 py-24 md:py-32 border-b">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.3em] mb-6 text-neutral-400">CONTACT</p>
            <h1 className="font-hachi text-5xl md:text-7xl mb-8 lowercase leading-[1.1]">
              let's talk
            </h1>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              Questions about our dolls? Want to discuss a custom order? We're here to help.
              Reach out and we'll get back to you within 24-48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-4 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] font-medium mb-3">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 text-base focus:outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] font-medium mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 text-base focus:outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] font-medium mb-3">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 border-b border-neutral-300 text-base focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 pt-4"
              >
                <span className="text-xs tracking-[0.3em] font-medium">SEND MESSAGE</span>
                <div className="w-12 h-12 border border-black flex items-center justify-center group-hover:bg-black transition-colors">
                  <PaperPlaneTilt size={20} weight="regular" className="group-hover:text-white transition-colors" />
                </div>
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 space-y-12"
          >
            <div>
              <h3 className="text-xs tracking-[0.2em] mb-4 font-medium text-neutral-400">EMAIL</h3>
              <a 
                href="mailto:hello@hirachu.com" 
                className="text-base hover:opacity-60 transition-opacity flex items-center gap-2"
              >
                <EnvelopeSimple size={20} weight="light" />
                hello@hirachu.com
              </a>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] mb-4 font-medium text-neutral-400">HOURS</h3>
              <div className="space-y-2 text-base text-neutral-600 font-light">
                <p>Mon - Fri: 9am - 6pm EST</p>
                <p>Sat: 10am - 4pm EST</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] mb-4 font-medium text-neutral-400">SOCIAL</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                >
                  <InstagramLogo size={18} weight="regular" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-10 py-24 md:py-32 bg-neutral-50 border-y">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[10px] tracking-[0.3em] mb-4 text-neutral-400">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-light leading-[1.2]">
              Common questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-base font-medium mb-3">{faq.question}</h3>
                <p className="text-base text-neutral-600 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with tracked shipping. Delivery times vary by location.",
  },
  {
    question: "Can I return or exchange a doll?",
    answer: "Yes, within 30 days of delivery in original condition with all packaging.",
  },
  {
    question: "Do you accept custom orders?",
    answer: "We occasionally take custom commissions. Contact us to discuss your vision.",
  },
  {
    question: "How long does production take?",
    answer: "Each doll is made to order. Production typically takes 4-6 weeks before shipping.",
  },
  {
    question: "Are the dolls limited edition?",
    answer: "Yes, all our dolls are produced in small batches. Once sold out, they're retired.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay through our secure checkout.",
  },
];
