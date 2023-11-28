"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Quizzes", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/" },
  ];


  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="" justify="start">
        <NavbarMenuToggle
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-lg uppercase">QuizApp</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden md:flex">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.link} color="foreground" className="text-lg">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href={"/login"} className="text-lg" color="foreground">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="font-medium"
            color="primary"
            href={"/sign-up"}
            variant="solid"
            radius="sm"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full font-semibold" color={"foreground"} href={item.link} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link className="w-full font-semibold" color="foreground" href="/login" size="lg">Login</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
