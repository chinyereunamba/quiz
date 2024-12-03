"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
// import { redirect } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import React, { useEffect, useState } from "react";
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
  LogOut,
  Book,
  Search,
  Bell,
  SettingsIcon,
  BookOpenIcon,
  TrophyIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "@/hooks/localStorage";

/**  @type {React.FC<React.ReactNode>} */
export const Protected = ({ children }) => {
  const path = usePathname().split("/")[1];
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <h1>Loading...</h1>;
  // }
  // if (status === "unauthenticated") {
  //   return redirect("/login");
  // }

  return (
    <div className="flex transition-[width]">
      <Sidebar />
      <main className="flex-1">
        <Header name={path.split("-").join(" ")} />
        <section className="p-8">{children}</section>
      </main>
    </div>
  );
};

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: ChartBarIcon },
  { name: "Collections", link: "collections", icon: HomeIcon },
  { name: "Quizzes", link: "quizzes", icon: BookOpenIcon },
  { name: "Leaderboard", link: "leaderboard", icon: TrophyIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

/**  @type {React.FC} */
export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useLocalStorage("collapsed", null);
  const { theme, setTheme } = useTheme();

  return (
    <Card
      className={`h-screen rounded-none shadow-none ${
        isCollapsed ? "w-20" : "w-64"
      } transition-[width] duration-300 ease-in-out`}
    >
      <div
        className={`fixed bg-transparent flex flex-col  justify-between ${
          isCollapsed ? "w-20" : "w-64"
        } transition-[width] duration-300 ease-in-out h-screen`}
      >
        <div>
          <div
            className={`flex gap-2 items-center flex-1 w-full ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Button
              isIconOnly
              aria-label="Toggle Sidebar"
              className="m-4 mx-2"
              onPress={() => setIsCollapsed(!isCollapsed)}
            >
              <MenuIcon size={20} />
            </Button>
            {!isCollapsed ? <h3 className="text-xl font-bold">Quizapp</h3>:''}
          </div>

          <div className="flex-1 rounded-md bg-primary p-2 mx-2 flex gap-4 items-center transition-all">
            {isCollapsed ? (
              <span className="h-12 w-12 bg-white grid place-items-center rounded-full">
                <UserIcon size={24} />
              </span>
            ) : (
              <>
                <span className="h-12 w-12 bg-white grid place-items-center rounded-full">
                  <UserIcon size={24} />
                </span>
                <p className="font-bold text-background">Chinyere</p>
              </>
            )}
          </div>
          <div
            className={`flex flex-col gap-4 mt-4 ${
              isCollapsed ? "items-center" : "items-start px-2"
            } transition-all duration-300 ease-in-out`}
          >
            {navLinks.map((item) =>
              isCollapsed ? (
                <Tooltip key={item.name} content={item.name} placement="right">
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-current justify-center p-3 hover:bg-secondary rounded-md"
                  >
                    <item.icon size={24} />
                  </Link>
                </Tooltip>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-current hover:bg-secondary w-full p-3 rounded-md"
                >
                  <item.icon size={24} />
                  <span>{item.name}</span>
                </Link>
              )
            )}
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
          {isCollapsed ? (
            <Tooltip
              key={"logout"}
              content={isCollapsed ? "logout" : null}
              placement="right"
            >
              <Link
                href={"logout"}
                className={`flex cursor-pointer items-center gap-2 text-current
                  justify-center w-full
                `}
              >
                <LogOut size={24} />
              </Link>
            </Tooltip>
          ) : (
            <Link
              href={"logout"}
              className={`flex cursor-pointer items-center gap-2 text-current`}
            >
              <LogOut size={24} />
              <span>Logout</span>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default Protected;

export function Header({ name }) {
  return (
    <header className="px-8 py-4 border-b flex justify-between sticky top-0 bg-background z-40">
      <h3 className="capitalize text-xl font-bold">{name}</h3>

      <div className="flex gap-2 items-center">
        <Search />
        <Bell />
      </div>
    </header>
  );
}
