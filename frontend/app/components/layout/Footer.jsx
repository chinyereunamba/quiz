import React from "react";
import { Link } from "@nextui-org/react";
import FooterTitle from "./FooterTitle";

function Footer() {
  return (
    <footer color='secondary'>
      <div className="flex flex-col gap-20 lg:justify-between lg:flex-row w-full lg:w-4/5 p-6">
        <div>
          <FooterTitle title={"Features"} />
          <div>
            <ul>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Create Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FooterTitle title={"About"} />
          <div>
            <ul>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Our story
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FooterTitle title={"Support"} />
          <div>
            <ul>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  F. A. Q
                </Link>
              </li>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Help and Support
                </Link>
              </li>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FooterTitle title={"Follow us"} />
          <div>
            <ul>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  Twitter
                </Link>
              </li>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link color="foreground" className="py-1" href="/">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-6 px-4 md:p-4 md:justify-between md:flex-row">
        <p className=" font-normal">
          &copy; 2023 QuizApp. All rights reserved
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
    </footer>
  );
}

export default Footer;
