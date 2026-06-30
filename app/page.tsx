import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Rebates } from "@/components/sections/Rebates";
import { Reviews } from "@/components/sections/Reviews";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";

/**
 * The single landing page. Section order follows the conversion funnel:
 * hook (hero) → what (services) → who (about) → trust (rebates, testimonials)
 * → act (booking) → visit (contact).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Rebates />
      <Reviews />
      <Booking />
      <Contact />
    </>
  );
}
