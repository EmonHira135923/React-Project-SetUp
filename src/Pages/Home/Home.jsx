import React from "react";
import Hero from "../../Componets/Header/Hero";
import Downloads from "../../Componets/Download/Downloads";
import Features from "../../Componets/Feature/Features";
import ReviewSection from "../../Componets/Review/ReviewSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Downloads></Downloads>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
