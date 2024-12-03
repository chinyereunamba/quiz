import Intro from "@/components/home/Intro";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import NavbarComponent from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Intro />
      <SectionOne />
      <SectionTwo />
      <Testimonial />
      <Footer />
    </main>
  );
}
