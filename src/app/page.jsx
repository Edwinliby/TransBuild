import Hero from "./_home/heroSection/hero";
import Product from "./_home/productSection/product";
import Numbers from "@/components/Numbers/numbers";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <Numbers head="Key Statistics" />
    </>
  );
}
