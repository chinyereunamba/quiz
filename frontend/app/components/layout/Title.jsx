import React from 'react'

function Title({title}) {
  return (
    <h1 className="title text-3xl md:text-4xl lg:text-6xl font-bold mb-12 text-center">
      {title}
    </h1>
  );
}

export default Title