"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
// import { redirect } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button, Switch, Link, Card, Tooltip } from "@nextui-org/react";

import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BarChartIcon as ChartBarIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
  LogOut
} from "lucide-react";

/**  @type {React.FC<any>} */
export const Protected = ({ children }) => {
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <h1>Loading...</h1>;
  // }
  // if (status === "unauthenticated") {
  //   return redirect("/login");
  // }

  const navLinks = [
    { name: "Dashboard", link: "dashboard" },
    { name: "Collections", link: "collections" },
    { name: "Quizzes", link: "quizzes" },
    { name: "Collections", link: "collections" },
    { name: "Settings", link: "settings" },
  ];
  return (
    <div className="flex transition-[width]">
      <Sidebar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

const menuItems = [
  { name: "Home", icon: HomeIcon, href: "/" },
  { name: "Profile", icon: UserIcon, href: "/profile" },
  { name: "Dashboard", icon: ChartBarIcon, href: "/dashboard" },
  { name: "Settings", icon: CogIcon, href: "/settings" },
];

/**  @type {React.FC} */
export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Card
      className={`h-screen flex flex-col justify-between ${
        isCollapsed ? "w-20" : "w-64"
      } transition-[width] duration-300 ease-in-out`}
    >
      <div>
        <Button
          isIconOnly
          aria-label="Toggle Sidebar"
          className="m-4"
          onPress={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <MenuIcon size={20} /> : <XIcon size={20} />}
        </Button>
        <div
          className={`flex flex-col gap-4 mt-4 ${
            isCollapsed ? "items-center" : "items-start px-4"
          } transition-all duration-300 ease-in-out`}
        >
          {menuItems.map((item) => (
            <Tooltip
              key={item.name}
              content={isCollapsed ? item.name : null}
              placement="right"
            >
              <Link
                href={item.href}
                className={`flex items-center gap-2 text-current ${
                  isCollapsed ? "justify-center w-full" : ""
                }`}
              >
                <item.icon size={24} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
      <div
        className={`mb-4 flex flex-col  gap-4 ${
          isCollapsed ? " items-center justify-center" : "px-4"
        } transition-all duration-300 ease-in-out`}
      >
        <Switch
          defaultSelected={theme === "dark"}
          size="lg"
          color="secondary"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} size={16} />
            ) : (
              <SunIcon className={className} size={16} />
            )
          }
        />
        <Tooltip
          key={"logout"}
          content={isCollapsed ? "logout" : null}
          placement="right"
        >
          <Link
            href={"logout"}
            className={`flex items-center gap-2 text-current ${
              isCollapsed ? "justify-center w-full" : ""
            }`}
          >
            <LogOut size={24} />
            {!isCollapsed && <span>Logout</span>}
          </Link>
        </Tooltip>
      </div>
    </Card>
  );
}

export default Protected