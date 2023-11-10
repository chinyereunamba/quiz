import React from "react";
import { Link } from "@nextui-org/react";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";

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
      <div className="flex flex-wrap gap-20 md:gap-20 lg:justify-between lg:flex-row w-full lg:w-4/5 p-6">
        <div className="max-w-[400px]">
          <FooterTitle title={"Features"} />
          <div>
            <ul>
              {feature.map((item, index) => (
                <FooterLink key={index} content={item} link={"/"} />
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[400px]">
          <FooterTitle title={"About"} />
          <div>
            <ul>
              {about.map((item, index) => (
                <FooterLink key={index} content={item} link={"/"} />
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[400px]">
          <FooterTitle title={"Support"} />
          <div>
            <ul>
              {support.map((item, index) => (
                <FooterLink key={index} content={item} link={"/"} />
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[400px]">
          <FooterTitle title={"Follow us"} />
          <div>
            <ul>
              {social.map((item, index) => (
                <FooterLink key={index} content={item} link={"/"} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center py-6 px-4 md:p-4 md:justify-between md:flex-row">
        <p className=" font-normal">&copy; 2023 QuizApp. All rights reserved</p>
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
    </footer>
  );
}

export default Footer;
