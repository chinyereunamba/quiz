import Intro from "./components/Intro";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import NavbarComponent from './components/layout/Navbar'

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Intro />
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
