"use client";
import ContactNetworkSlides from "@/components/ContactNetworkSlide";
import MarqueeContact from "./Marquee";

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen relative z-10 bg-[#fff6ec]">
      <MarqueeContact />
      <ContactNetworkSlides />
    </div>
  );
}
