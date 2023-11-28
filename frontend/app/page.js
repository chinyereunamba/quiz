import Intro from "@/components/Intro";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import NavbarComponent from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Testimonial from "@/components/Testimonial";

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
