import React from 'react'
import { Link } from '@nextui-org/react';

function SidebarLinks({link, icon, title}) {
  return (
    <li className="py-4 px-5 hover:bg-gray-300">
      <Link href={link} className="flex gap-2 items-center">
        {icon} {title}
      </Link>
    </li>
  );
}

export default SidebarLinks