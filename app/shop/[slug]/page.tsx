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
  
  try {
    const product = await getServerProduct(slug);

    if (!product) {
      return {
        title: "Product Not Found | Hirachu",
      };
    }

    return {
      title: `${product.name} - $${product.price} | Hirachu`,
      description: product.description,
      openGraph: {
        title: `${product.name} | Hirachu`,
        description: product.description,
        images: [{ url: product.image, alt: product.name }],
        type: "website",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product | Hirachu",
    };
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
