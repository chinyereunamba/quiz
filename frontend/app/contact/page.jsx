import React from "react";
import NavbarComponent from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Title from "../components/layout/Title";
import Contact from "../components/layout/Contact";

function page() {
  return (
    <main>
      <NavbarComponent />
      <Contact />
      <Footer />
    </main>
  );
}

export default page;
