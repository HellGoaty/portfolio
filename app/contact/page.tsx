import ContactNetworkSlides from "@/components/ContactNetworkSlide";
import GrainEffect from "@/components/GrainEffect";
import Header from "@/components/Header";

export default function page() {
  return (
    <div id="contact" className="min-h-screen">
      <Header />
      <ContactNetworkSlides />
      <GrainEffect elementId="contact" />
    </div>
  );
}
