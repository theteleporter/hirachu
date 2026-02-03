"use client";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import useEmblaCarousel from "embla-carousel-react";
import { useShopifyProducts } from "@/lib/use-shopify";

export const NewArrivals = () => {
  const { products, loading } = useShopifyProducts();
  const [emblaRef] = useEmblaCarousel({ 
    align: "start", 
    loop: false,
    dragFree: true,
  });

  const newArrivals = useMemo(() => {
    return products.filter((p) => p.tag === "NEW");
  }, [products]);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="px-4 md:px-10 mb-10">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-neutral-400 mb-2">JUST DROPPED</p>
              <h2 className="text-2xl md:text-3xl font-light">NEW ARRIVALS</h2>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10">
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-[0_0_280px] animate-pulse">
                <div className="aspect-square bg-neutral-800 mb-3" />
                <div className="h-4 bg-neutral-800 mb-2 w-3/4" />
                <div className="h-4 bg-neutral-800 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="px-4 md:px-10 mb-10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-neutral-400 mb-2">JUST DROPPED</p>
            <h2 className="text-2xl md:text-3xl font-light">NEW ARRIVALS</h2>
          </div>
          <a
            href="/shop?filter=new"
            className="flex items-center gap-2 text-sm border-b border-white pb-1 hover:border-neutral-500 hover:text-neutral-400 transition-colors"
          >
            EXPLORE <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-48 md:h-64 mb-10 overflow-hidden">
        <Image
          src="/images/new-arrivals-banner.png"
          alt="New arrivals collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6 px-4 md:px-10">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-[0_0_200px] md:flex-[0_0_280px]"
            >
              <Link href={`/shop/${product.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-square bg-neutral-900 mb-3 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm text-neutral-400">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
