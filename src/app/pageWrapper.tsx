import React from "react";
import Navbar from "./(sections)/Navbar";
import Hero from "./(sections)/Hero";
import Bests from "./(sections)/Bests";
import WhyJoinUs from "./(sections)/WhyJoinUs";
import BecauseTheyLoveUs from "./(sections)/BecauseTheyLoveUs";
import GrowYourCollection from "./(sections)/GrowYourCollection";
import ShoesCollected from "./(sections)/ShoesCollected";
import Footer from "./(sections)/Footer";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-500 text-gray-900">
      <main className="bg-primary flex w-full flex-col">
        <Navbar />
        <Hero />
        <Bests />
        <WhyJoinUs />
        <BecauseTheyLoveUs />
        <GrowYourCollection />
        <ShoesCollected />
        <Footer />
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
