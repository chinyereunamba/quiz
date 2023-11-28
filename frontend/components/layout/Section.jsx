import React from 'react'

function Section(props) {
  return (
      <section className="p-6 my-12 flex flex-col items-center justify-center">{ props.children}</section>
  )
}

export default Section