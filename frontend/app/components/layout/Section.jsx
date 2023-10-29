import React from 'react'

function Section(props) {
  return (
      <section className="p-6 my-10 flex flex-col h-unit-9xl items-center justify-center">{ props.children}</section>
  )
}

export default Section