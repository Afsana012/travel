import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <>
   <Navbar/>
   <main>
      {/* Your main content goes here */}
      <Hero/>
   </main>
   </>
  );
}