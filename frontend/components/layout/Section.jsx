import React from "react";

function Section(props) {
  return (
    <section className="p-6 py-20 my-12 flex flex-col items-center justify-center max-w-7xl m-auto">
      {props.children}
    </section>
  );
}

export default Section;
