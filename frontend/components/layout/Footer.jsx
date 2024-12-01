import React from "react";
import { Link } from "@nextui-org/react";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import { year } from "@/constants";

function Footer() {
  const support = [
    "F. A. Q",
    "Help and Support",
    "Privacy Policy",
    "Terms of Service",
  ];

  const feature = ["Create Quiz"];

  const about = ["Our story"];

  const social = ["Twitter", "LinkedIn", "GitHub"];

  return (
    <footer>
      <div className="max-w-7xl m-auto px-4 py-6">
        <section className="flex justify-between max-md:flex-col gap-6">
          <div>
            <FooterTitle title={"Features"} />
            <div>
              <ul>
                {feature.map((item, index) => (
                  <FooterLink key={index} content={item} link={"/"} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <FooterTitle title={"About"} />
            <div>
              <ul>
                {about.map((item, index) => (
                  <FooterLink key={index} content={item} link={"/"} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <FooterTitle title={"Support"} />
            <div>
              <ul>
                {support.map((item, index) => (
                  <FooterLink key={index} content={item} link={"/"} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <FooterTitle title={"Follow us"} />
            <div>
              <ul>
                {social.map((item, index) => (
                  <FooterLink key={index} content={item} link={"/"} />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:justify-start">
          <p className=" font-normal">
            &copy; {year} QuizApp. All rights reserved
          </p>
          <p className="font-normal">
            Designed by{" "}
            <Link
              href="#"
              about="Developer website"
              className="font-bold"
              target="_blank"
              color="foreground"
            >
              Chinyere Unamba
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
