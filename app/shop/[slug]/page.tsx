import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import ClientPage from "./client-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ClientPage params={{ slug }} />;
}
