import Core from "./_home/coreSection/core";
import Hero from "./_home/heroSection/hero";
import Product from "./_home/productSection/product";
import Numbers from "@/components/Numbers/numbers";
import Sustain from "./_home/sustainSection/sustain";
import Faq from "./_home/faqSection/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <Numbers head="Key Statistics" />
      <Core />
      <Sustain />
      <Faq />
    </>
  );
}
