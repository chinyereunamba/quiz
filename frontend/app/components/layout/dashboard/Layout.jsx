import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function Layout() {
  return (
    <section className="layout">
      <Sidebar />
      <section className={`content`}>
        <Header />
        <Content />
      </section>
    </section>
  );
}

export default Layout;
