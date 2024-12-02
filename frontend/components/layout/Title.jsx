import React from "react";

function Title({ title }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      {title}
    </h2>
  );
}

export default Title;
