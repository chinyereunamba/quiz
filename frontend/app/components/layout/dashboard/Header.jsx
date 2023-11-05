import { Input, Button, Link as link, User } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <header className="flex px-4 py-3 header gap-10 justify-between bg-white">
      <div className="flex justify-center items-center w-3/4">
        <Input
          isClearable
          radius="sm"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              //   "bg-transparent",
              //   "text-black/90 dark:text-white/90",
              //   "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            // innerWrapper: "bg-transparent",
            // inputWrapper: [
            //   "shadow-xl",
            //   "bg-default-200/50",
            //   "dark:bg-default/60",
            //   "backdrop-blur-xl",
            //   "backdrop-saturate-200",
            //   "hover:bg-default-200/70",
            //   "dark:hover:bg-default/70",
            //   "group-data-[focused=true]:bg-default-200/50",
            //   "dark:group-data-[focused=true]:bg-default/60",
            //   "!cursor-text",
            // ],
          }}
          placeholder="Type to search..."
          startContent={
            <AiOutlineSearch
              /*className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" */ className="text-xl"
            />
          }
        />
      </div>

      <div className="flex gap-5 items-center w-fit">
        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <div>
          <Button as={link}>Logout</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
