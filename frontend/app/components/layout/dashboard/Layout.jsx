import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import style from './Layout.module.css'

function Layout() {
  return (
    <section className={style.layout}>
      <Sidebar />
      <section className={style.content}>
        <Header />
        <Content />
      </section>
    </section>
  );
}

export default Layout;
