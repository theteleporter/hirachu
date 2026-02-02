import { Hero } from "@/components/sections/hero";
import { FeaturedDolls } from "@/components/sections/featured-dolls";
import { NewArrivals } from "@/components/sections/new-arrivals";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDolls />
      <NewArrivals />
      <AboutTeaser />
      <Newsletter />
    </main>
  );
}
