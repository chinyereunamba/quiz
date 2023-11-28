import React from "react";
import Title from "./Title";
import Section from "./Section";
import { Link } from "@nextui-org/react";

function Contact() {
  return (
    <Section>
      <Title title={"Contact Us"} />
      <p className="text-xl max-w-[1200px]" style={{ lineHeight: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
        voluptate officia necessitatibus illo consequuntur officiis fugiat
        rerum, minus, quaerat aspernatur, repellat rem mollitia vel architecto?
        Aliquam neque fugiat aut accusamus magni, cum, ut consequatur maxime quo
        dolorum ex iusto, magnam laborum voluptates illum voluptatem doloremque
        praesentium. Quos, impedit maiores.
      </p>
      <div className="py-10 flex justify-start gap-4 max-w-[1200px] w-full">
        <div
          className="p-4 flex flex-col max-w-[300px] w-full rounded-md border-2"
          color="primary"
        >
          <span className="text-lg font-medium">Email</span>
          <span>
            <Link href="mailto:johndoe@gmail.com">johndoe@gmail.com</Link>
          </span>
        </div>

        <div
          className="p-4 flex flex-col max-w-[300px] w-full rounded-md border-2"
          color="foreground"
        >
          <span className="text-lg font-medium">Phone</span>
          <span>
            <Link href="tel:+123456789">+123456789</Link>
          </span>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
