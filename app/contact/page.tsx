"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Hachi_Maru_Pop } from "next/font/google";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const hachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service
    console.log("Contact form:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="px-4 md:px-10 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`${hachiMaruPop.className} text-3xl md:text-5xl mb-4 lowercase`}>
            get in touch
          </h1>
          <p className="text-sm text-neutral-600 font-light">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium mb-2">
                  SUBJECT *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="product">Product Question</option>
                  <option value="custom">Custom Order</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                SEND MESSAGE <PaperPlaneTilt size={16} weight="light" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs font-medium mb-4">CUSTOMER SERVICE</h3>
              <div className="space-y-3 text-sm text-neutral-600 font-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium mb-4">EMAIL</h3>
              <p className="text-sm text-neutral-600 font-light">
                <a href="mailto:hello@hirachu.com" className="hover:text-black transition-colors">
                  hello@hirachu.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium mb-4">RESPONSE TIME</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>

            <div className="pt-8 border-t">
              <h3 className="text-xs font-medium mb-4">FREQUENTLY ASKED</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h4 className="text-sm font-medium mb-1">{faq.question}</h4>
                    <p className="text-sm text-neutral-600 font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with tracked shipping.",
  },
  {
    question: "Can I return or exchange a doll?",
    answer: "Yes, within 30 days of purchase in original condition.",
  },
  {
    question: "Do you accept custom orders?",
    answer: "Contact us to discuss custom doll commissions.",
  },
];
