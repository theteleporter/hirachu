import type { Metadata } from "next";
import { getServerProduct } from "@/lib/shopify-server";
import ClientPage from "./client-page";
import { notFound } from "next/navigation";

export const revalidate = 3600; // Revalidate every hour (ISR)

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Default metadata in case of errors
  const defaultMetadata: Metadata = {
    title: "Hirachu Doll | Hirachu",
    description: "Handcrafted collectible doll from Hirachu's limited collection",
    openGraph: {
      images: ["/api/og?title=Hirachu%20Doll&subtitle=Limited%20Collection"],
    },
  };
  
  try {
    const product = await getServerProduct(slug);

    if (!product) {
      return defaultMetadata;
    }

    const ogTitle = encodeURIComponent(product.name);
    const ogSubtitle = encodeURIComponent(`$${product.price} · ${product.category === 'girl' ? 'Girl' : 'Boy'} Doll`);

    return {
      title: `${product.name} - $${product.price} | Hirachu`,
      description: product.description,
      openGraph: {
        title: `${product.name} | Hirachu`,
        description: product.description,
        images: [
          {
            url: `/api/og?title=${ogTitle}&subtitle=${ogSubtitle}&type=product`,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.name} | Hirachu`,
        description: product.description,
        images: [`/api/og?title=${ogTitle}&subtitle=${ogSubtitle}&type=product`],
      },
    };
  } catch (error) {
    // Silently use default metadata on network errors
    return defaultMetadata;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ClientPage params={{ slug }} />;
}
