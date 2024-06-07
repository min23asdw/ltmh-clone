import ItemCard from "@/components/blockdit/card";
import CatalogSection from "@/components/blockdit/catalogSection";
import Nav from "@/components/blockdit/nav";
import React from "react";

export default function Home() {
  // const mock = ["400px", "300px"];
  const getRandomHeight = () => `${Math.floor(Math.random() * 201) + 200}px`;
  const repeatCount = 50;
  return (
    <main className="min-h-screen">
      <Nav />

      <section className="mx-auto px-4 ">
        <div className="mx-auto w-[450px] md:w-[550px]  xl:w-[800px] ">
          <CatalogSection />

          <div className="gap-4 columns-2 xl:columns-3">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <ItemCard index={index} height={getRandomHeight()} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
