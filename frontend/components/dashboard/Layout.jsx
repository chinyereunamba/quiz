import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function Layout({children}) {
  return (
    <section className="layout">
      <Sidebar />
      <section className={`content`}>
        <Header />
        {children}
      </section>
    </section>
  );
}

export default Layout;
