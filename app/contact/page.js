import ContactNetworkSlides from "@/components/ContactNetworkSlide";
import CustomCursor from "@/components/CustomCursor";
import GrainEffect from "@/components/GrainEffect";
import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
    <div id="contact" className="min-h-screen">
      <Header />
      <ContactNetworkSlides />
      <CustomCursor />
      <GrainEffect elementId="contact" />
    </div>
  );
}
