import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hirachu",
  description: "Our privacy policy and how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="px-4 md:px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] mb-6 text-neutral-400">LEGAL</p>
        <h1 className="font-hachi text-5xl md:text-7xl mb-12 lowercase leading-[1.1]">
          privacy policy
        </h1>

        <div className="space-y-12 text-base text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-black mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us. This may include your name, email address, shipping 
              address, payment information, and order history.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to process your orders, communicate with you about 
              your purchases, improve our products and services, and send you marketing communications 
              (with your consent).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your 
              information with service providers who help us operate our business, such as payment 
              processors and shipping carriers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may 
              also opt out of marketing communications at any time. Contact us at hello@hirachu.com 
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mb-4">Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes by posting the new policy on our website.
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
