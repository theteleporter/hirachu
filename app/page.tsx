import { Hero } from "@/components/sections/hero";
import { FeaturedDolls } from "@/components/sections/featured-dolls";
import { BrandMarquee } from "@/components/brand-marquee";
import { NewArrivals } from "@/components/sections/new-arrivals";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Newsletter } from "@/components/sections/newsletter";

export const revalidate = 3600; // Revalidate every hour (ISR)

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDolls />
      <BrandMarquee />
      <NewArrivals />
      <AboutTeaser />
      <Newsletter />
    </main>
  );
}
