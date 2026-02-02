import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Hirachu",
  description: "Terms and conditions for purchasing from Hirachu.",
};

export default function TermsPage() {
  return (
    <main className="px-4 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] mb-6 text-neutral-400">LEGAL</p>
        <h1 className="font-hachi text-5xl md:text-7xl mb-12 lowercase leading-[1.1]">
          terms & conditions
        </h1>

        <div className="space-y-12 text-base text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-black mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these 
              terms and conditions. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Product Information</h2>
            <p>
              All dolls are handcrafted and made to order. Colors and minor details may vary 
              slightly from photos due to the handmade nature of our products. Production time 
              is typically 4-6 weeks before shipping.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Orders & Payment</h2>
            <p>
              All orders are subject to acceptance and availability. We accept major credit cards 
              and PayPal. Payment is processed at the time of order. Prices are in USD and subject 
              to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Returns & Exchanges</h2>
            <p>
              Items may be returned within 30 days of delivery in original, unused condition with 
              all packaging. Custom orders are final sale. Buyer is responsible for return shipping 
              costs unless the item is defective.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including images, text, and designs, is the property 
              of Hirachu and protected by copyright. You may not reproduce or distribute any 
              content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Limitation of Liability</h2>
            <p>
              Hirachu is not liable for any indirect, incidental, or consequential damages arising 
              from the use of our products or website. Our liability is limited to the purchase 
              price of the product.
            </p>
          </section>

          <section className="pt-8 border-t border-neutral-200">
            <p className="text-sm">
              Last updated: February 2026<br />
              Questions? Contact us at hello@hirachu.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
