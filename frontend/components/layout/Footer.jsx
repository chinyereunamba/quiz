import React from "react";
import { Link } from "@nextui-org/react";
import FooterTitle from "./FooterTitle";
import { year } from "@/constants";

function Footer() {
  const support = [
    "F. A. Q",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
  ];

  const feature = ["Create Quiz", "Take Quiz", "Leaderboards"];

  const about = ["Our story", "Team", "Careers"];

  const social = ["Twitter", "LinkedIn", "GitHub"];

  return (
    <footer className="bg-content1 text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <FooterTitle>Features</FooterTitle>
            <ul className="space-y-2">
              {feature.map((link, index) => (
                <li key={index + link}>
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle>About</FooterTitle>
            <ul className="space-y-2">
              {about.map((link, index) => (
                <li key={index + link}>
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle>Support</FooterTitle>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index + link}>
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle>Follow Us</FooterTitle>
            <ul className="space-y-2">
              {social.map((link, index) => (
                <li key={index + link}>
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center">
          <p>© {year} <strong>QuizApp.</strong> All rights reserved</p>
          <p className="mt-4 sm:mt-0">
            Designed by{" "}
            <Link
              href="https://chinyereunamba.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
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
