import React from 'react'
import { Link } from '@nextui-org/react';

function FooterLink({content, link}) {
  return (
    <li>
      <Link color="foreground" className="py-1" href={link}>
        {content}
      </Link>
    </li>
  );
}

export default FooterLink