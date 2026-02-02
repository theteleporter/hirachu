"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart, ShoppingCart, CaretRight } from "@phosphor-icons/react";
import { getProductBySlug, products } from "@/lib/products";
import { generateProductSchema } from "@/lib/schema";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const schema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Breadcrumbs */}
      <div className="px-4 md:px-10 py-6 border-b">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <CaretRight size={12} weight="bold" />
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <CaretRight size={12} weight="bold" />
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square bg-neutral-100 overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {product.tag && (
              <span className="inline-block bg-black text-white text-[10px] px-2 py-1 mb-4 w-fit">
                {product.tag}
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl font-light mb-2">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>

            <div className="mb-8 pb-8 border-b">
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-medium mb-3">DETAILS</h3>
              <ul className="text-sm text-neutral-600 space-y-2 font-light">
                <li>• Handcrafted collectible doll</li>
                <li>• Limited production</li>
                <li>• Articulated joints</li>
                <li>• Includes display stand</li>
                <li>• Height: 12 inches (30cm)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full bg-black text-white px-6 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} weight="light" />
                ADD TO CART
              </button>
              
              <button
                type="button"
                className="w-full border border-black text-black px-6 py-4 text-sm font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={18} weight="light" />
                ADD TO WISHLIST
              </button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-xs text-neutral-500 font-light">
                ✓ Free shipping on orders over $200<br />
                ✓ Ships within 3-5 business days<br />
                ✓ 30-day return policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-4 md:px-10 py-16 md:py-24 border-t bg-neutral-50">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-light">YOU MIGHT ALSO LIKE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/shop/${relatedProduct.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-square bg-neutral-100 mb-3 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">{relatedProduct.name}</h3>
                <p className="text-sm text-neutral-500">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      </main>
    </>
  );
}
