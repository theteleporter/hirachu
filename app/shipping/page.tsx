import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information - Hirachu",
  description: "Shipping rates, delivery times, and international orders.",
  openGraph: {
    title: "Shipping Information - Hirachu",
    description: "Shipping rates, delivery times, and international orders.",
    url: "https://hirachu.vercel.app/shipping",
    images: [
      {
        url: "/api/og?title=Shipping%20Info&subtitle=Worldwide%20%C2%B7%20Tracked",
        width: 1200,
        height: 630,
        alt: "Hirachu Shipping Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Information - Hirachu",
    description: "Shipping rates, delivery times, and international orders.",
    images: ["/api/og?title=Shipping%20Info&subtitle=Worldwide%20%C2%B7%20Tracked"],
  },
};

export default function ShippingPage() {
  return (
    <main className="px-4 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] mb-6 text-neutral-400">POLICIES</p>
        <h1 className="font-hachi text-5xl md:text-7xl mb-12 lowercase leading-[1.1]">
          shipping
        </h1>

        <div className="space-y-12 text-base text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-black mb-4">Production Time</h2>
            <p>
              Each doll is handcrafted to order. Production typically takes 4-6 weeks before 
              your order ships. You will receive a notification when your order is ready to ship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Domestic Shipping (US)</h2>
            <p className="mb-4">
              We offer the following shipping options within the United States:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Standard Shipping (5-7 business days): $15</li>
              <li>• Express Shipping (2-3 business days): $30</li>
              <li>• Free shipping on orders over $200</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">International Shipping</h2>
            <p className="mb-4">
              We ship worldwide via tracked international shipping. Delivery times vary by destination:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Canada: 7-14 business days ($25)</li>
              <li>• Europe: 10-21 business days ($35)</li>
              <li>• Asia: 10-21 business days ($35)</li>
              <li>• Rest of World: 14-28 business days ($40)</li>
            </ul>
            <p className="mt-4">
              International customers are responsible for any customs fees, duties, or taxes 
              imposed by their country.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Tracking</h2>
            <p>
              All orders include tracking. You will receive a tracking number via email once 
              your order ships. Track your order through the carrier's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Shipping Damage</h2>
            <p>
              If your doll arrives damaged, please contact us within 48 hours with photos. 
              We will arrange a replacement or refund. Keep all original packaging.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Order Changes</h2>
            <p>
              Once an order enters production, it cannot be canceled or modified. Contact us 
              immediately if you need to make changes.
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
