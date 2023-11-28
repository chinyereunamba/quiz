import React from "react";
import { AiOutlineSetting, AiOutlineFolder } from "react-icons/ai";
import { BiSolidMapPin, BiLibrary, BiFolder } from "react-icons/bi";
import SidebarLinks from "./SidebarLinks";

function Sidebar() {
  const links = [
    {
      title: "Create Quiz",
      icon: <BiFolder />,
      link: "/create-quiz",
    },
    {
      title: "Explore",
      icon: <BiSolidMapPin />,
      link: "/",
    },
    {
      title: "My Library",
      icon: <BiLibrary />,
      link: "/",
    },
    {
      title: "Collections",
      icon: <AiOutlineFolder />,
      link: "/",
    },
    {
      title: "Settings",
      icon: <AiOutlineSetting />,
      link: "/",
    },
  ];
  return (
    <nav color="primary" className={`w-[250px] flex flex-col gap-20 border-r-2 min-h-screen sidebar`}>
      <div className="py-3 px-5 text-lg font-semibold">
        <p>QuizApp</p>
      </div>
      <div className="">
        <ul className="flex flex-col">
          {links.map((link, index) => (
           <SidebarLinks key={index} link={link.link} icon={link.icon} title={link.title}/>
         ))}
        </ul>
      </div>
      <div>
        Theme
      </div>
    </nav>
  );
}

export default Sidebar;
