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
} from "@nextui-org/react";
import { NavigationMenu } from "../ui/navigation-menu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Quizzes", "Contact", "About"];

  return (
    
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p>Quiz</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href="#" color="foreground" className="text-lg">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-lg">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-lg"
            color="primary"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
