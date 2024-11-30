import React from 'react'

function Title({title}) {
  return (
    <h1 className="title text-2xl md:text-3xl lg:text-5xl font-bold pb-20 text-center">
      {title}
    </h1>
  );
}

export default Title