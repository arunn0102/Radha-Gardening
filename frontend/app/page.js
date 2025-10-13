import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import WhyChooseUs from "@/components/WhyChooseUs"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <Highlights />
      <Gallery />
      <Testimonials />
      <ContactCTA />

    </>
  );
}
