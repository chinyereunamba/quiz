import React from "react";
import Link from "next/link";
import { AiOutlineSetting, AiOutlineFolder } from "react-icons/ai";
import { BiSolidMapPin, BiLibrary } from "react-icons/bi";

function Sidebar() {
  return (
    <nav color="primary" className={`w-[250px] flex flex-col gap-20 border-r-2 min-h-screen sidebar`}>
      <div className="py-3 px-5 text-lg font-semibold">Logo</div>
      <div className="">
        <ul className="flex flex-col">
          <li className="py-4 px-5 hover:bg-gray-300">
            <Link href={"/"} className="flex gap-2 items-center">
              <BiSolidMapPin /> Explore
            </Link>
          </li>
          <li className="py-4 px-5 hover:bg-gray-300">
            <Link href={"/"} className="flex gap-2 items-center">
              <BiLibrary /> My Library
            </Link>
          </li>
          <li className="py-4 px-5 hover:bg-gray-300">
            <Link href={"/"} className="flex gap-2 items-center">
              <AiOutlineFolder /> Collections
            </Link>
          </li>
          <li className="py-4 px-5 hover:bg-gray-300">
            <Link href={"/"} className="flex gap-2 items-center">
              <AiOutlineSetting /> Settings
            </Link>
          </li>
        </ul>
      </div>
      <div>
        Theme
      </div>
    </nav>
  );
}

export default Sidebar;
