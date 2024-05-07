import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

interface navItemProps {
  title: string;
  url: string;
}

const NavItem = ({ title, url }: navItemProps) => (
  <NavbarItem className="ml-10">
    <Link href={url}>{title}</Link>
  </NavbarItem>
);

export default NavItem;
