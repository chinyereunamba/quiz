import React from 'react'

function Title({title}) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-8 text-center">
      {title}
    </h1>
  );
}

export default Title