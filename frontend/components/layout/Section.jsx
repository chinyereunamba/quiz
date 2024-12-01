import React from "react";

function Section({ children }) {
  return (
    <section className="py-20 px-4 max-w-7xl w-full m-auto">
      {children}
    </section>
  );
}

export default Section;


export const AuthSection = ({ children }) => {
   return (
     <section className="h-screen flex flex-col justify-center items-center">
       {children}
     </section>
   );
}